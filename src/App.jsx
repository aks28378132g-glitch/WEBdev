import { useState, useEffect } from 'react'
import './App.css'
import data from "./data"


const MarksInfo = ({ name, marks }) => {
  return (
    <>
      <div className='MarksInfo'>
        <p>{name}</p>
        <p>{marks}</p>
      </div>
    </>
  );
}

function App() {


  let [marksData, setMarksData] = useState(data);

  let [nameStd, setNameStd] = useState("");
  let [marksStd, setMarksStd] = useState(0);

  let [total, setTotal] = useState(marksData.length);
  let [mean, setMean] = useState(0);
  let [passed, setPassed] = useState(0);
  let [failed, setFailed] = useState(0);
  // let [sum, setSum] = useState(0);


  useEffect(() => {
    let sum = 0;
    let passedStudents = 0;
    let failedStudents = 0;
    marksData.forEach((i)=>{
      // setSum(sum=> sum + i.marks);
      sum += i.marks;
      if (i.status){
        passedStudents += 1;
      } else {
        failedStudents += 1;
      }
    })
    let average = (sum/total).toFixed(2);
    console.log(sum, average, total);
    setMean(average);
    setFailed(failedStudents);
    setPassed(passedStudents);


    // Since We are using the marks input form an HTML input tag, it would always return the value in the form of a string,
    // and hence, that's why it was adding it in the form of a string and the absurd mean value.
    // we have to always keep that in mind.
    // we can either use the Number() method or the unary + method, we can use unary + as -> +e.target.value -> this would explicitly conver the value to number

  }, [marksData]);


  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = [...marksData];
    let nameTemp = nameStd;
    let markTemp = marksStd;
    let pass;
    if (marksStd >= 40) {
      pass = true;
      setPassed(passed => passed + 1);
    } else {
      pass = false;
      setFailed(failed => failed + 1);
    }
    let obj = {
      name: nameTemp,
      marks: markTemp,
      status: pass
    }
    temp.push(obj);
    setMarksData(temp);
    setNameStd('');
    setMarksStd(0);
    setTotal(total => total + 1)
  }

  const handleChangeName = (e) => {
    setNameStd(e.target.value);
  }
  const handleChangeMarks = (e) => {
    setMarksStd(+e.target.value);
  }

  const editMarks = (key) => {
    let temp = [...marksData];
    temp[key].marks = Number(prompt("Enter New Marks: "));
    if (temp[key].marks >= 40){
      temp[key].status = true;
    } else {
      temp[key].status = false;
    }
    setMarksData(temp)
  }


  return (
    <>
      <div id="container">
        <h1>Student Report Card</h1>
        <div id="ReportCard">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Marks</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {marksData.map((item, key) => {
                // item.status ? setPassed(passed => passed+1) : setFailed(failed => failed+1)
                return <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.marks}</td>
                  <td className={`${item.status ? "pass" : "fail"}`}>{item.status ? "Pass" : "Fail"}</td>
                  <td><button onClick={() => editMarks(key)}>&#9998;</button></td>
                </tr>
              })}
            </tbody>
          </table >
        </div>
        <div className='status'>
          <p>Total Students: {total}</p>
          <p>Average: {mean}</p>
          <p>Passed: {passed}</p>
          <p>Failed: {failed}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={nameStd} placeholder='Enter Name Here...' onChange={handleChangeName} />
          <input type="text" value={marksStd} placeholder='Enter Marks Here...' onChange={handleChangeMarks} />
          <input type="submit" id='btn-submit' value="Add" />
        </form>
      </div>
    </>
  )
}

export default App
