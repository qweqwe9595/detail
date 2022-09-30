import { Button, Modal, Image } from 'antd';
import React, { useContext, useState } from 'react';
import "antd/dist/antd.css";
import { UserContext as cartContext } from "host/Store";

const App = () => {
  const [items,setItems] = useContext(cartContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        CART - {items.length}
      </Button>
      <Modal title="Cart" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {items?.map((item,index)=>{
          return <div id={item+index}><Image height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmEXh05i6FeGbqaQlldssi6HLLDjp24BlbC9V1Zaqm8c64iR_yfk6O2WsOjnlwMjiYxw&usqp=CAU" />item with name => {item}</div>
        })}
      </Modal>
    </>
  );
};

export default App;