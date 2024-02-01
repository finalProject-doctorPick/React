// 병원 추가,수정 모달
import React, { useState } from "react";
import axios from "axios";
import { useTokenContext } from "../../Context/TokenContext";
import Input from "../../Layout/Input";
import Address from "../../Layout/Address";
import useAlert from "../../Layout/Alert";

// type = 추가인지 수정인지 (수정일때만 type='modify')
const HospitalEditModal = ({ onClose, type, item = {}, fetchData }) => {
  const [hospitalName, setHospitalName] = useState(item.hospitalName || "");
  const [hospitalTel, setHospitalTel] = useState(item.hospitalTel || "");
  const [address, setAddress] = useState({ main: "", detail: "" });
  const showAlert = useAlert();

  const handleAddressSelect = (selectedAddress) => {
    setAddress(selectedAddress);
  };

  console.log(item);

  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <table id="signUpInputForm" className="signUpTable">
        <tr>
          <td colSpan={2}>
            <Input
              id="hospital_name"
              className="member_name"
              label="병원이름"
              type="text"
              placeholder="병원명을 입력하세요"
              style={{ width: "500px" }}
              value={hospitalName.trim()}
              onChange={(e) => setHospitalName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <Input
              id="hospital_tel"
              className="member_tel"
              label="전화번호"
              type="text"
              placeholder="대표번호를 입력하세요"
              style={{ width: "500px" }}
              value={hospitalTel.trim()}
              onChange={(e) => setHospitalTel(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} style={{ width: "510px" }}>
            <Address
              onAddressSelect={handleAddressSelect}
              itemAddr={item.hospitalAddrMain}
              itemAddrDetail={item.hospitalAddrDetail}
            />
          </td>
        </tr>
      </table>
      <div className="modify-button">
        {type === "modify" && (
          <button
            className="clinicSubBtn-short"
            style={{ background: "red", height: "50px" }}
          >
            삭제
          </button>
        )}
        <button className="clinicSubBtn-mid" style={{ background: "#11C2AD" }}>
          저장
        </button>
        <button className="clinicSubBtn-mid" onClick={onClose}>
          취소
        </button>
      </div>
    </div>
  );
};

export default HospitalEditModal;
