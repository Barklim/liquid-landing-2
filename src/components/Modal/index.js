import React, { useState } from "react";
import "./Modal.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import PdfModal from "../../components/Pdf";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from "@chakra-ui/react";

// import ym from "react-yandex-metrika";

function ModalHomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();

  // const [value, setValue] = useState("+7");
  const [value, setValue] = useState("");

  const [alertProp, setAlert] = useState("lq__alert");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    // defaultValues: { name: data.name, email: data.email,  tel: data.tel, },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const sendData = {
      name: data.name,
      phoneNumber: data.tel,
      email: data.email,
    };

    // alert(JSON.stringify(sendData));
    // console.log("!!!");
    // console.log(sendData);
    // console.log("!!!");
    // setTimeout(function () {
    //   onClose();
    // }, 2000);

    setAlert("lq__alert displayVisisble");

    window.ym(85672684, "reachGoal", "send");
  };
  // console.log("errors");
  // console.log(errors);
  // console.log(isValidPhoneNumber("+7 982 828 33"));
  // console.log(isValidPhoneNumber("+7 982 828 33") === true);

  return (
    <>
      <Button className="button_primary1" onClick={onOpen}>
        Получить
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size={window.innerWidth > 567 ? "xl" : "full"}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent onSubmit={handleSubmit(onSubmit)}>
          <form>
            <ModalHeader className="label">Получить кредит</ModalHeader>
            {/* <div className="label__sub">
              Укажите свои контактные данные и мы свяжемся <br />с вами в
              ближайшее время
            </div>
            <div className="label__sub_Mobile">
              Укажите свои контактные данные
              <br /> и мы свяжемся с вами в ближайшее <br /> время
            </div> */}
            <ModalCloseButton />
            <ModalBody pb={6} className="modal__body">
              <div className={alertProp}>
                <Alert status="success">
                  <AlertIcon />
                  <Box flex="1">
                    <AlertTitle>Успешно отправлено!</AlertTitle>
                    <AlertDescription display="block">
                      Мы рассмотрим вашу заявку и ответим в течение следующих 48
                      часов.
                    </AlertDescription>
                  </Box>
                  {/* <CloseButton position="absolute" right="8px" top="8px" /> */}
                </Alert>
              </div>
              <FormControl className="modal__formControl">
                <FormLabel>
                  Имя <span className="label__star">*</span>
                </FormLabel>
                <Input
                  // ref={initialRef}
                  placeholder="Иван"
                  name="name"
                  ref={register({
                    required: true,
                    minLength: {
                      value: 1,
                      message: "Введите имя",
                    },
                  })}
                />
                {errors.name?.type === "required" && (
                  <div className="error">Введите имя</div>
                )}
              </FormControl>

              <FormControl className="modal__formControl">
                <FormLabel>
                  Телефон <span className="label__star">*</span>
                </FormLabel>
                <PhoneInput
                  defaultCountry="RU"
                  placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
                  value={value}
                  onChange={setValue}
                  className="PhoneInputInput"
                  name="tel"
                  control={control}
                  ref={register({
                    required: true,
                    minLength: {
                      value: 1,
                      message: "Введите номер",
                    },
                  })}
                />
                {value?.length > 12 && value?.length !== 0 && (
                  <div className="error">Вы ввели слишком много цифр</div>
                )}
                {value?.length < 12 &&
                  value?.length !== 0 &&
                  value?.length !== 2 && (
                    <div className="error">
                      Введите корректный номер телефона
                    </div>
                  )}
                {errors.tel?.type === "required" && (
                  <div className="error">Введите номер телефона</div>
                )}
              </FormControl>

              <FormControl mt={4} className="modal__formControl">
                <FormLabel>Почта</FormLabel>
                <Input
                  placeholder="example@gmail.com"
                  ref={register({
                    required: false,
                    // pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                  })}
                  name="email"
                />
                {errors.email?.type === "required" && (
                  <div className="error">Введите почту</div>
                )}
              </FormControl>

              <div className="modal__agreement">
                <label className="form__customCheckbox">
                  <input
                    type="checkbox"
                    className="form__checkbox"
                    name="agreement"
                    ref={register({
                      required: true,
                    })}
                  ></input>
                  <span></span>
                </label>
                <PdfModal>
                  <div className="modal__agreementTextWrap">
                    Соглашаюсь{" "}
                    <span className="modal__agreementText">
                      с правилами обработки&nbsp;
                      {/* <br /> */}
                      персональных данных
                    </span>
                  </div>
                </PdfModal>
              </div>
              {errors.agreement?.type === "required" && (
                <div className="error">Примите соглашение</div>
              )}
              {/* <div className="modal__subText">
                На email вы получите информацию о дате запуска сервиса
                ЛиквидКредит
              </div> */}
            </ModalBody>

            <ModalFooter className="modal__footer">
              <Button
                type="submit"
                className="button_primary1"
                colorScheme="blue"
                mr={3}
              >
                Отправить
              </Button>

              <Button
                className="button_primary1 button_close"
                onClick={onClose}
              >
                Закрыть
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalHomePage;
