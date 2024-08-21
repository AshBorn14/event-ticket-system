import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { IoTicket } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';

const Qrcode = () => {
    const location = useLocation()
    const data = location.state
    const qrRef = useRef();
    console.log(data)



    const downloadImage = () => {
        html2canvas(qrRef.current, {
            scale: 3,  // Increase the scale for better resolution
            useCORS: true,  // Use this if your images are from an external source
            logging: true,  // Enable logging for debugging
            backgroundColor: null  // Use null to keep the background transparent
        }).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `${data.name}-${data.class}-${data.section}-ticket.png`;
            link.click();
        });
    };

    // const downloadPDF = () => {
    //     html2canvas(qrRef.current).then(canvas => {
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF({
    //             orientation: 'portrait',
    //             unit: 'px',
    //             format: [canvas.width, canvas.height],
    //         });

    //         pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    //         pdf.save(`${data.name}-${data.class}-${data.section}-ticket.pdf`);
    //     });
    // };


  return (
    <div className='pt-20'>
        <div className='flex items-center justify-center'>
        <h1 className='text-white my-3 text-2xl font-semibold'>Confirmation Ticket</h1><IoTicket className='text-white text-2xl ml-2'/>

        </div>
        <div ref={qrRef} className='qr-background mx-auto rounded p-4'>
            <div className='border-2 border-gray-400 h-full flex flex-col'>
                <div className='flex  flex-col items-center mt-2'>
                    <div>
                        <h2 className='text-4xl font-bold text-white font-fam tracking-widest'>After Party</h2>
                        <p className='text-white mt-0 text-xs flex justify-center'><span className='mr-2'>Unwind and Celebrate!</span><span className='flex'> <BsStars /> Sept 5</span></p>
                        <h3 className='mt-5 text-white text-3xl text-center font-black tracking-wide'>Entry Pass</h3>
                    </div>
                    
                    <div className='p-4 bg-white rounded mt-3'>
                        <QRCode value={JSON.stringify(data.id)}/>
                    </div>
                    <div className='my-5 text-2xl font-bold text-white'>
                        <p>{data.name}</p>
                        <p>{data.class}-{data.section}</p>
                    </div>
                    
                    
                </div>
                <div className='mt-auto text-center text-gray-300 py-2 bg-neutral-800 w-full font-bold flex items-center justify-center'>
                        <p className='text-sm'>Scan the above qr code</p>
                </div>

            </div>
        </div>
        <div className='text-center mb-3'>
            <button onClick={downloadImage} className='mt-4 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded'>Download Ticket</button>
        </div>
    </div>
  )
}

export default Qrcode