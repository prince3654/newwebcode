import logo from "./logo.svg";
import "./App.css";
import ItemDate from "./components/ItemDate";
import Item from "./components/Item";

function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "July",
      itemYear: "2010",
    },
    {
      itemName: "Surf",
      itemDate: "10",
      itemMonth: "June",
      itemYear: "2020",
    },
    {
      itemName: "Nirmala",
      itemDate: "30",
      itemMonth: "aug",
      itemYear: "1910",
    },
    {
      itemName: "Namka",
      itemDate: "14",
      itemMonth: "Dec",
      itemYear: "190",
    },
  ];
  return (
    <div>
      <Item name={response[0].itemName}>I am item 1</Item>
      <ItemDate
        day={response[0].itemDate}
        month={response[0].itemMonth}
        year={response[0].itemYear}
      > I am item date 1</ItemDate>
      <Item name={response[1].itemName}> </Item>
      <ItemDate
        day={response[1].itemDate}
        month={response[1].itemMonth}
        year={response[1].itemYear}
      ></ItemDate>
      <Item name={response[2].itemName}></Item>
      <ItemDate
        day={response[2].itemDate}
        month={response[2].itemMonth}
        year={response[2].itemYear}
      ></ItemDate>
      <div className="App">Hello jee</div>
    </div>
  );
}

export default App;
