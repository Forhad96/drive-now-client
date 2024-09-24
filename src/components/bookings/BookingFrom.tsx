import { Button, Row } from "antd";
import CommonForm from "../form/CommonForm";
import CommonInput from "../form/CommonInput";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import DNModal from "../Shared/DNModal";
import { FC } from "react";
import DNDatePicker from "../form/DNDatePicker";
import DNTimePicker from "../form/DNTimePicker";
import { useAddBookingMutation } from "../../redux/features/user/bookingManagement";
type TBookingProps = {
  carName:string |undefined;
  carId:string | undefined;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const BookingFrom: FC<TBookingProps> = ({
  isModalOpen,
  setIsModalOpen,
  carName,
  carId,
}) => {
  const [addBooking] = useAddBookingMutation()
  //  const navigate = useNavigate();
  //  const dispatch = useDispatch();

  const onSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("Creating booking...");
    const bookingData = {
      car:carId,
      date:data.date,
      startTime:data.startTime
    }
       try {

         const res = await addBooking(bookingData).unwrap();
         console.log(res);

         toast.success("Booking Added successfully", { id: tostId, duration: 2000 });
         setIsModalOpen(false)
        //  navigate(`/${user.role}/dashboard`);
       } catch (error) {
         toast.error("something went wrong.", { id: tostId, duration: 2000 });
       }

    console.log(await data, "bookingManagement");
  };
  const defaultValues = {
    car: carName,
  };
  return (
    <DNModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      title="Booking Confirm"

    >
      <Row justify="center" align="middle">
        <CommonForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <CommonInput type="text" name="car" label="Car" />
          <DNDatePicker name="date" label="Pick up date"/>
          <DNTimePicker name="startTime" label="Pick Up time"/>
          <Button className="bg-primary" htmlType="submit">Confirm Booking</Button>
        </CommonForm>
      </Row>
    </DNModal>
  );
};
export default BookingFrom;
