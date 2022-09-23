import React,{useState,useEffect,useContext} from "react";
import { Col, Row, Image, Timeline } from "antd";
import { ThunderboltTwoTone } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  useParams,
  useLocation,
  Link
} from "react-router-dom";
import {UserContext} from "host/Store"

function DetailPage() {
  const [user,setUser] = useContext(UserContext)
  console.log(user,setUser)
  let params = useParams();
  let localtion = useLocation();
  const [id, setId] = useState();

  useEffect(() => {
    setId(params?.id)
  }, [localtion]);

  return (
    <div style={{ padding: "10px 40px" }}>
      <button onClick={()=>{setUser('change Store')}}>change store</button>
      <Link to={'/'}>change store</Link>
      <Row>
        <Col span={12}>
          <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </Col>
        <Col span={12} style={{ padding: "20px" }}>
          <h1>You watching product with ID {id}</h1>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
      <Row>
        <h1>
          <ThunderboltTwoTone /> Food is everything we are. It's an extension of
          nationalist feeling, ethnic feeling, your personal history, your
          province, your region, your tribe, your grandma. It's inseparable from
          those from the get-go.
        </h1>
      </Row>
    </div>
  );
}

export default DetailPage;
