import React, { useEffect, useState } from "react";
import { Heading, SimpleGrid, Box, Select } from "@chakra-ui/react";
import LineChart from "../Components/Charts/LineChart";
import BarChart from "../Components/Charts/BarChart";
const allMonths = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const mydata1 = {
  labels: allMonths,
  dataset1: {
    JAN: 10,
    FEB: 20,
    MAR: 95,
    APR: 30,
    MAY: 60,
    JUN: 40,
    JUL: 45,
    AUG: 90,
    SEP: 16,
    OCT: 45,
    NOV: 38,
    DEC: 15,
  },
};
const mydata2 = {
  labels: allMonths,
  dataset1: {
    JAN: 0,
    FEB: 50,
    MAR: 15,
    APR: 40,
    MAY: 30,
    JUN: 98,
    JUL: 15,
    AUG: 80,
    SEP: 36,
    OCT: 45,
    NOV: 68,
    DEC: 25,
  },
};
const mydata3 = {
  labels: allMonths,
  dataset1: {
    JAN: 13,
    FEB: 20,
    MAR: 55,
    APR: 20,
    MAY: 90,
    JUN: 98,
    JUL: 45,
    AUG: 20,
    SEP: 36,
    OCT: 45,
    NOV: 68,
    DEC: 75,
  },
};



const Dashboard = () => {
  const [data, setData] = useState({});


  useEffect(() => { 
    
    setData(mydata1);
  }, []);

  const handleSelectChange = (e) => {
    let val = e.target.value;
    if (val == "d1") {
      setData(mydata1);
      
    } else if (val == "d2") {
      setData(mydata2);
    
    } else if (val == "d3") {
       setData(mydata3);
     
    }
  };

  return (
    <div id="main-container">
      <Heading as="h4" size="lg" textAlign="center">
        Dashboard
      </Heading>
      <section>
        <SimpleGrid
          columns={{ sm: 2, md: 4 }}
          spacing="8"
          p="10"
          textAlign="center"
          rounded="lg"
          color="gray.400"
        >
          <Box
            boxShadow="2xl"
            p="6"
            rounded="md"
            bg="white"
            borderBottom="3px solid blue"
            textAlign="left"
          >
            <Box color="gray">New Users</Box>
            <Box color="black" fontWeight="bold" fontSize="20px">
              $ 234
            </Box>
          </Box>
          <Box
            boxShadow="2xl"
            p="6"
            rounded="md"
            bg="white"
            borderBottom="3px solid green"
            textAlign="left"
          >
            <Box color="gray">New Users</Box>
            <Box color="black" fontWeight="bold" fontSize="20px">
              $ 234
            </Box>
          </Box>
          <Box
            boxShadow="2xl"
            p="6"
            rounded="md"
            bg="white"
            borderBottom="3px solid red"
            textAlign="left"
          >
            <Box color="gray">New Users</Box>
            <Box color="black" fontWeight="bold" fontSize="20px">
              $ 234
            </Box>
          </Box>
          <Box
            boxShadow="2xl"
            p="6"
            rounded="md"
            bg="white"
            borderBottom="3px solid yellow"
            textAlign="left"
          >
            <Box color="gray">New Users</Box>
            <Box color="black" fontWeight="bold" fontSize="20px">
              $ 234
            </Box>
          </Box>
        </SimpleGrid>
      </section>
      <section id="charts">
        <div id="lineChart">
          <Select
           
            onChange={handleSelectChange}
            border={"1px solid black"}
            w="20%"
            textAlign={"center"}
            variant="filled"
            placeholder="Select data"
          >
            <option value="d1">Data 1</option>
            <option value="d2">Data 2</option>
            <option value="d3">Data 3</option>
          </Select>
          <LineChart data={data} />
        </div>
        <div id="barChart">
          <BarChart data={data} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
