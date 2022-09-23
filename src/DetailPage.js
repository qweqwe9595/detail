import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Image, Timeline } from "antd";
import { ThunderboltTwoTone } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";
import { UserContext } from "host/Store";

const recipes = [
  {
    id: 1000,
    title: "Chicken Pan Pizza",
    image: "/img/gallery/img_1.jpg",
    authorImg: "/img/top-chiefs/img_1.jpg",
  },
  {
    id: 2000,
    title: "Spaghetti and Meatballs",
    image: "/img/gallery/img_4.jpg",
    authorImg: "/img/top-chiefs/img_2.jpg",
  },
  {
    id: 3000,
    title: "American Cheese Burger",
    image: "/img/gallery/img_5.jpg",
    authorImg: "/img/top-chiefs/img_3.jpg",
  },
  {
    id: 4000,
    title: "Mutton Biriyani",
    image: "/img/gallery/img_6.jpg",
    authorImg: "/img/top-chiefs/img_5.jpg",
  },
  {
    id: 5000,
    title: "Japanese Sushi",
    image: "/img/gallery/img_10.jpg",
    authorImg: "/img/top-chiefs/img_6.jpg",
  },
  {
    id: 6000,
    title: "Chicken Pan Pizza",
    image: "/img/gallery/img_1.jpg",
    authorImg: "/img/top-chiefs/img_1.jpg",
  },
  {
    id: 7000,
    title: "Spaghetti and Meatballs",
    image: "/img/gallery/img_4.jpg",
    authorImg: "/img/top-chiefs/img_2.jpg",
  },
  {
    id: 8000,
    title: "American Cheese Burger",
    image: "/img/gallery/img_5.jpg",
    authorImg: "/img/top-chiefs/img_3.jpg",
  },
  {
    id: 9000,
    title: "Mutton Biriyani",
    image: "/img/gallery/img_6.jpg",
    authorImg: "/img/top-chiefs/img_5.jpg",
  },
  {
    id: 10000,
    title: "Japanese Sushi",
    image: "/img/gallery/img_10.jpg",
    authorImg: "/img/top-chiefs/img_6.jpg",
  },
  {
    id: 11000,
    title: "American Cheese Burger",
    image: "/img/gallery/img_5.jpg",
    authorImg: "/img/top-chiefs/img_3.jpg",
  },
  {
    id: 12000,
    title: "Mutton Biriyani",
    image: "/img/gallery/img_6.jpg",
    authorImg: "/img/top-chiefs/img_5.jpg",
  },
];

function DetailPage() {
  const [user, setUser] = useContext(UserContext);
  const [item, setItem] = useState(null);
  console.log(user, setUser);
  let params = useParams();
  let localtion = useLocation();
  const [id, setId] = useState();

  useEffect(() => {
    setId(params?.id);
    setItem(recipes.find((el) => el.id == params?.id));
  }, [localtion]);

  return (
    <div style={{ padding: "10px 40px" }}>
      <button
        onClick={() => {
          setUser("change Store");
        }}
      >
        Thay đổi global Store của team host{" "}
      </button>
      <Link to={"/"}>
        Dùng instane router của team host để chuyển về trang chủ
      </Link>
      <Row>
        <Col span={12}>
          <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </Col>
        <Col span={12} style={{ padding: "20px" }}>
          <h1>You watching {item?.title}</h1>
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
