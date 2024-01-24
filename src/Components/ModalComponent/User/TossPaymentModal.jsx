import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";

const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);

export function TossPaymentModal() {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const agreementWidgetRef = useRef(null);
  const [price, setPrice] = useState(1000);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget("test_ck_ALnQvDd2VJ2NP9RnO90aVMj7X41m",  ANONYMOUS); // 비회원 customerKey

      if (paymentWidgetRef.current == null) {
        paymentWidgetRef.current = paymentWidget;
      }

      /**
       * 결제창을 렌더링합니다.
       * @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods%EC%84%A0%ED%83%9D%EC%9E%90-%EA%B2%B0%EC%A0%9C-%EA%B8%88%EC%95%A1
       */
      const paymentMethodsWidget = paymentWidgetRef.current.renderPaymentMethods(
        "#payment-method",
        { value: price },
        { variantKey: "DEFAULT" }
      );

      /**
       * 약관을 렌더링합니다. 
       * @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement%EC%84%A0%ED%83%9D%EC%9E%90-%EC%98%B5%EC%85%98
       */
      agreementWidgetRef.current = paymentWidgetRef.current.renderAgreement('#agreement', { variantKey: 'DEFAULT' });

      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  return (
    <div className="wrapper w-100" style={{ width: '800px', height: '600px' }}>
      <div className="max-w-540 w-100">
        <div id="payment-method" className="w-100" />
        <div id="agreement" className="w-100" />
        <div className="btn-wrapper w-100">
          <button
            className="btn primary w-100"
            onClick={async () => {
              const paymentWidget = paymentWidgetRef.current;
    
              try {
                /**
                 * 결제 요청
                 * @docs https://docs.tosspayments.com/reference/widget-sdk#requestpayment%EA%B2%B0%EC%A0%9C-%EC%A0%95%EB%B3%B4
                 */
                await paymentWidget?.requestPayment({
                  orderId: generateRandomString(),
                  orderName: "토스 티셔츠 외 2건",
                  customerName: "김토스",
                  customerEmail: "customer123@gmail.com",
                  successUrl: window.location.origin + "/payment/success",
                  failUrl: window.location.origin + "/payment/failure"
                });
              } catch (error) {
                // TODO: 에러 처리
              }
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default TossPaymentModal;
