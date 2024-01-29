import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../../Context/ModalContext";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import Select from "../../Select";
import WorkTime from "./WorkTime";
import SearchHospitalModal from "../../../ModalComponent/Doctor/SearchHospitalModal";
import { useTokenContext } from "../../../Context/TokenContext";
import axios from "axios";

const ProfileEditList = ({ type, title }) => {
  const [imageSrc, setImageSrc] = useState("");
  const navigate = useNavigate();
  const { openModal } = useModalContext();
  const [hospitalName, setHospitalName] = useState("");
  const [mainAddress, setMainAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorSubject, setDoctorSubject] = useState("");
  const [doctorMajor, setDoctorMajor] = useState("");
  const [doctorComments, setDoctorComments] = useState("");

  const { token, userEmail } = useTokenContext();
  const [initialDataFetched, setInitialDataFetched] = useState(false);
  const [selectedDay, setSelectedDay] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    holiday: false,
  });

  const handleOpenModal = (component, name, type) => {
    openModal(component, name, type);
  };

  // 파일 업로드 핸들러
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    // 업로드한 이미지 화면에 출력
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  // 업로드 버튼 핸들러
  const handleFileBtnClick = () => {
    document.getElementById("selectedFile").click();
  };

  // 선택한 병원이름
  const handleHospitalSelect = (selectedName) => {
    setHospitalName(selectedName);
  };

  const handleSubjectChange = (selectedOption) => {
    setDoctorSubject(selectedOption);
  };

  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const setAddressDatas = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let localAddress = data.sido + " " + data.sigungu;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddress = fullAddress.replace(localAddress, "");
      // mainAddress를 localAddress와 fullAddress로 구성된 주소로 설정
      const combinedMainAddress = localAddress + fullAddress;
      setMainAddress(combinedMainAddress);

      // detailAddress를 extraAddress로 설정
      setDetailAddress(extraAddress);
    }
  };

  const searchAddress = () => {
    open({ onComplete: setAddressDatas });
  };

  useEffect(() => {
    if (!initialDataFetched) {
      fetchDataFromServer();
    }
  }, [initialDataFetched]);

  const fetchDataFromServer = async () => {
    try {
      let url = "";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {},
      };
      if (type === "doctor") {
        url = "http://localhost:8080/doctors/getDoctorEntireInfoList";
        config.params.doctorEmail = userEmail;
      } else {
        url = "http://localhost:8080/drugstores/searchDrugstoreAndAvail";
        config.params.drugstoreEmail = userEmail;
      }

      const response = await axios.get(url, config);

      // 데이터를 가져온 후 상태를 업데이트
      const { doctorInfo, doctorAvailability } = response.data;
      console.log("의사 정보 : ", doctorInfo);
      console.log("진료 정보 : ", doctorAvailability);

      // 의사 정보 업데이트
      setDoctorName(doctorInfo.doctorName);
      setDoctorSubject(doctorInfo.doctorSubject);
      setHospitalName(doctorInfo.hospitalName);
      setDoctorMajor(doctorInfo.doctorMajor);
      setDoctorComments(doctorInfo.doctorComments);

      // 비대면 진료 시간 정보 업데이트 (선택한 날짜에 따라 업데이트 필요)
      // 예시: 월요일에 대한 정보를 가져와 업데이트
      const mondayAvailability = doctorAvailability.find(
        (availability) => availability.day === "월요일"
      );
      if (mondayAvailability) {
        // 시간 정보 업데이트
        setSelectedDay({ monday: true });
      }

      setInitialDataFetched(true);
    } catch (error) {
      console.error("데이터를 가져오는 동안 오류가 발생했습니다:", error);
    }
  };

  const handleSaveButtonClick = async () => {
    // 선택된 요일과 해당 요일에 선택된 시간 값을 가져오기
    const selectedDays = Object.keys(selectedDay).filter(
      (day) => selectedDay[day]
    );

    const selectedTimes = selectedDays.reduce((acc, day) => {
      const startTime = document.getElementById(`${day}StartTime`).value;
      const endTime = document.getElementById(`${day}EndTime`).value;
      acc.push(`${day}: ${startTime} ~ ${endTime}`);
      return acc;
    }, []);

    // 가져온 값을 노출하거나 다른 작업 수행
    alert(
      `저장 버튼 클릭!\n선택된 요일: ${selectedDays.join(
        ", "
      )}\n선택된 시간: ${selectedTimes.join(", ")}`
    );
  };

  if (type === "doctor") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>{title}</h1>
        <div
          className="profile-top"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div className="profile-top-left">
            <div
              className="profile-img"
              style={{
                border: "1px solid #cecece",
                borderRadius: "15px",
                width: "250px",
                height: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="uploadImg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              ) : (
                <span>
                  사진을 등록해주세요 <p>250x250</p>
                </span>
              )}
            </div>
            <input
              type="button"
              id="fileBtn"
              onClick={handleFileBtnClick}
              value="파일업로드"
              style={{ margin: "5px 0px 0px 0px" }}
            />
            <input
              type="file"
              id="selectedFile"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileInputChange}
            />
          </div>
          <div
            className="profile-top-right"
            style={{ display: "flex", position: "relative", bottom: "5px" }}
          >
            <table
              className="profile-table"
              style={{ borderCollapse: "separate", borderSpacing: "10px 5px" }}
            >
              <tr>
                <td colSpan={2}>
                  <h5>
                    <span>*</span> 의사 이름을 입력해주세요
                  </h5>
                  <input
                    type="text"
                    value={doctorName}
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setDoctorName(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                    <span>*</span> 진료과목을 선택해주세요
                  </h5>
                  <input type="text" readOnly />
                </td>
                <td style={{ verticalAlign: "bottom" }}>
                  <Select
                    options={[
                      { value: "가정의학과", label: "가정의학과" },
                      { value: "내과", label: "내과" },
                      { value: "마취통증과", label: "마취통증과" },
                      { value: "비뇨기과", label: "비뇨기과" },
                      { value: "산부인과", label: "산부인과" },
                      { value: "성형외과", label: "성형외과" },
                      { value: "소아과", label: "소아과" },
                      { value: "피부과", label: "피부과" },
                      { value: "신경외과", label: "신경외과" },
                      { value: "안과", label: "안과" },
                      { value: "영상의학과", label: "영상의학과" },
                      { value: "외과", label: "외과" },
                      { value: "이비인후과", label: "이비인후과" },
                      { value: "치과", label: "치과" },
                    ]}
                    style={{ width: "100%", height: "50px" }}
                    value={doctorSubject}
                    onChange={(e) => handleSubjectChange(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h5 style={{ marginLeft: "7px" }}>
                    {" "}
                    <span>*</span> 소속병원을 선택해주세요
                  </h5>
                  <input
                    type="text"
                    className="hospitalName"
                    value={hospitalName}
                    onChange={(e) => {
                      setHospitalName(e.target.value);
                    }}
                  />
                </td>
                <td style={{ verticalAlign: "bottom" }}>
                  <button
                    style={{
                      width: "100%",
                      height: "50px",
                    }}
                    onClick={() => {
                      handleOpenModal(
                        <SearchHospitalModal
                          onHospitalSelect={handleHospitalSelect}
                        />,
                        "병원검색",
                        "Search"
                      );
                    }}
                  >
                    병원검색
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h5 style={{ marginLeft: "7px" }}> 전공을 입력해주세요</h5>
                  <input
                    type="text"
                    value={doctorMajor}
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setDoctorMajor(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div
          className="profile-mid"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "30px 0px 30px 0px",
          }}
        >
          <div
            className="profile-mid-title"
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              right: "325px",
            }}
          >
            <span style={{ color: "red" }}>*</span>
            <h5 style={{ fontSize: "18px", margin: "0px 0px 5px 5px" }}>
              {" "}
              의사 소개를 입력해주세요
            </h5>
          </div>
          <div
            style={{
              width: "850px",
              height: "200px",
              border: "1px solid #cecece",
              borderRadius: "15px",
            }}
          >
            <textarea
              style={{
                width: "840px",
                height: "190px",
                border: "none",
                borderRadius: "15px",
                resize: "none",
                padding: "10px 0px 0px 10px",
              }}
              value={doctorComments}
              onChange={(e) => {
                setDoctorComments(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div
          className="profile-bottom"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ position: "relative", right: "285px" }}>
            <span style={{ color: "red" }}>*</span> 비대면 진료 시간 설정
          </h3>
          <WorkTime selectedDay={selectedDay} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "500px",
            margin: "50px 0px 50px 0px",
          }}
        >
          <button
            className="clinicSubBtn-mid"
            style={{ width: "180px", background: "#11c2ad" }}
            onClick={handleSaveButtonClick}
          >
            저장
          </button>
          <button
            className="clinicSubBtn-mid"
            style={{ width: "180px" }}
            onClick={() => {
              navigate(-1);
            }}
          >
            취소
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>{title}</h1>
        <div
          className="profile-top"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <table
            className="profile-table"
            style={{ borderCollapse: "separate", borderSpacing: "10px 5px" }}
          >
            <tr>
              <td style={{ width: "280px" }}>
                <h5>
                  <span>*</span> 약국 이름을 입력해주세요
                </h5>
                <input id="drugstoreName" type="text" />
              </td>
              <td style={{ width: "280px" }}>
                {" "}
                <h5>
                  <span>*</span> 전화번호를 입력해주세요
                </h5>
                <input id="drugstoreTel" type="text" />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <h5>
                  <span>*</span> 주소를 입력해주세요
                </h5>
                <input
                  id="addr_main"
                  className="member_addr_main"
                  type="text"
                  style={{ width: "500px" }}
                  value={mainAddress}
                  readOnly
                />
                <button
                  id="addrBtn"
                  onClick={searchAddress}
                  style={{
                    width: "200px",
                    height: "49px",
                    marginLeft: "17px",
                    verticalAlign: "bottom",
                  }}
                >
                  주소검색
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ width: "280px" }}>
                <h5>　상세주소</h5>
                <input
                  type="text"
                  id="addr_detail"
                  className="member_addr_detail"
                  value={detailAddress}
                  onChange={(e) => setDetailAddress(e.target.value)}
                />
              </td>
              <td style={{ width: "280px" }}>
                <h5>나머지주소</h5>
                <input
                  id="drugstoreAddrDetail"
                  type="text"
                  placeholder="나머지 주소를 입력해주세요"
                />
              </td>
            </tr>
          </table>
        </div>
        <div
          className="profile-mid"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "30px 0px 30px 0px",
          }}
        >
          <div
            className="profile-mid-title"
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",

              width: "735px",
            }}
          >
            <span style={{ color: "red" }}>*</span>
            <h5 style={{ fontSize: "18px", margin: "0px 0px 5px 5px" }}>
              {" "}
              약국 소개를 입력해주세요
            </h5>
          </div>
          <div
            style={{
              width: "735",
              height: "200px",
              border: "1px solid #cecece",
              borderRadius: "15px",
            }}
          >
            <textarea
              id="drugstoreComments"
              style={{
                width: "725px",
                height: "190px",
                border: "none",
                borderRadius: "15px",
                resize: "none",
                padding: "10px 0px 0px 10px",
              }}
            ></textarea>
          </div>
        </div>
        <div
          className="profile-bottom"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ position: "relative", right: "285px" }}>
            <span style={{ color: "red" }}>*</span> 영업 시간 설정
          </h3>
          <WorkTime selectedDay={selectedDay} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "500px",
            margin: "50px 0px 50px 0px",
          }}
        >
          <button
            className="clinicSubBtn-mid"
            style={{ width: "180px", background: "#11c2ad" }}
            onClick={handleSaveButtonClick}
          >
            저장
          </button>
          <button
            className="clinicSubBtn-mid"
            style={{ width: "180px" }}
            onClick={() => {
              navigate(-1);
            }}
          >
            취소
          </button>
        </div>
      </div>
    );
  }
};

export default ProfileEditList;
