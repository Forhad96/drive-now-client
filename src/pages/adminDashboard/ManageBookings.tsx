import { Button, Table, TableColumnsType } from "antd";
const ManageBookings = () => {
  const { data: bookingData, isFetching } = usege(undefined);
  // console.log(bookingData);
  const tableData = bookingData?.data?.map(({ _id, date, startTime }) => ({
    key: _id,
    date,
    startTime,
  }));
  const columns: TableColumnsType = [
    {
      title: "Pick Up Date",
      dataIndex: "date",
    },
    {
      title: "Pick Up Time",
      dataIndex: "startTime",
    },
    {
      title: "Action",
      render: () => <Button>Update</Button>,
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      //   onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};
export default ManageBookings;
