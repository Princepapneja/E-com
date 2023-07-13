import React, { useEffect, useRef, useState } from "react";
import Inputs from "./inputs";

const ChatWithAgent = () => {
    const input= useRef(null);
const[text,setText]= useState("")

    const handelClick=((index)=>{
        const ref= document.querySelectorAll('.chat_cta')
        setText(ref[index].innerText)
    })


    return (
    <>
    
      <div className="chat_box">
        <div className="chat_header flex">
          <div className="chat_icon">
            <img
              src={require(`../../assets/icons/companyLogo.svg`).default}
              alt=""
            />
          </div>
          <h3 className="chat_heading">Customer Service</h3>
        </div>
        

        <div className="message_box flex">
            {/* user Agent msg */}
          <div className="agent_msg_box_time">
            <span className="agent_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Hi, I'm the Support Assistant</span>
            </span>
            <p className="msg_time">2:30 pm</p>
          </div>
          {/* client msg  */}
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Faster Delivery Request</span>
            </span>
            <p className="msg_time">2:30 pm</p>
          </div>
          {/* ctas */}
          <div className="chat_ctas flex">
            <button className="chat_cta green_text_cta"  onClick={()=>{handelClick(0)}}>
              Faster Delivery Request
            </button>
            <button className="chat_cta yellow_text_cta" onClick={()=>{handelClick(1)}}>
              Product Information
            </button>
            <button className="chat_cta red_text_cta" onClick={()=>{handelClick(2)}}>Cancel order</button>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
          <div className="client_msg_box_time">
            <span className="client_msg_box">
              <img
                src={require(`../../assets/icons/polygon.svg`).default}
                alt=""
              />
              <span className="chat_msg">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.</span>
            </span>
            <p className="msg_time">15:24 am</p>
          </div>
        </div>
        

          {/* send message box  */}

        <div className="send_message flex">
          <button>
            <img
              src={require(`../../assets/icons/record.svg`).default}
              alt=""
              className="record_cta"
            />
          </button>
          <input ref={input}
            type="text"
            placeholder="Your Message"
            className="input_your_msg"
            value={text}
            onChange={((e)=>{setText(e.target.value)})}
          />
          <button>
            <img src={require(`../../assets/icons/emoji.svg`).default} alt="" className="emoji_option" />
          </button>
          <button>
            <img src={require(`../../assets/icons/attachment.svg`).default} alt="" className="attachment" />
          </button>
          <button>
            <img src={require(`../../assets/icons/arrow.svg`).default} alt="" className="send_cta" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatWithAgent;
