import React, { useState, useEffect } from "react";

import io from 'socket.io-client';

const socket = io.connect('http://localhost:3030');

const Room = () => {
  const [msg, setMsg] = useState('');
  const [rMsg, setRmsg] = useState([]);
  const sendMsg = (e) => {
    e.preventDefault();
    socket.emit('send_msg', { msg });
    const mtMsg = {
      who: 'me',
      msg,
    }
    setRmsg(prev => [...prev, mtMsg])
    setMsg('');
  }

  useEffect(() => {
    socket.on('receive_msg', data => {
      const newMsg = {
        who: 'notMe',
        msg: data.msg
      }
      setRmsg(prev => [...prev, newMsg]);
    })
  }, [socket])


  return (
    <div className='container'>
      <form onSubmit={sendMsg} className='form'>
        <input type="text" placeholder="message" value={msg} onChange={(e) => setMsg(e.target.value)}/>
        <button>Send</button>
      </form>
      <div className='msg'>
        {
          rMsg.map(item => <div key={item.msg} className={item.who === 'me' ? 'me' : ''}>{item.msg}</div>)
        }
      </div>
    </div>
  )
}

export default Room;