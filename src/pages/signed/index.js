import React, { useState, useEffect, useRef, useCallback } from "react"
import { FaVolumeUp } from "react-icons/fa"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Logo from '../../../public/images/logo.png'
import Head from "next/head"
import chroma from "chroma-js"
import { Button } from "@nextui-org/react"
import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/swiper-bundle.css'
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Poster from '../../../public/images/poster.jpeg'
import Poster2 from '../../../public/images/poster2.jpg'
import Poster3 from '../../../public/images/poster3.jpeg'
import ReactPlayer from "react-player"


const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null

    useEffect(() => {
      if (token) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
        router.push('/auth/login')
      }
    }, [router, token])

    return isAuthenticated ? <WrappedComponent {...props} /> : null
  }
}

const Signed = React.memo(() => {
  const Table = () => {
    const data = [
      {
        kelas: "X",
        jadwal: [
          { jam: "1", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
          { jam: "2", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
          { jam: "3", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
          { jam: "4", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
          { jam: "5", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
          { jam: "6", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
          { jam: "7", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
          { jam: "8", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
          { jam: "9", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
          { jam: "10", a: "PWdPB", b: "PWdPB", c: "PWdPB", d: "PWdPB", e: "PWdPB", f: "PWdPB", g: "PWdPB" },
        ],
      },
      {
        kelas: "XI",
        jadwal: [
          { jam: "1", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
          { jam: "2", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
          { jam: "3", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
          { jam: "4", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
          { jam: "5", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
          { jam: "6", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
          { jam: "7", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
          { jam: "8", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
          { jam: "9", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
          { jam: "10", a: "PKK", b: "PKK", c: "PKK", d: "PKK", e: "PKK", f: "PKK", g: "PKK" },
        ],
      },
      {
        kelas: "XII",
        jadwal: [
          { jam: "1", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
          { jam: "2", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
          { jam: "3", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
          { jam: "4", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
          { jam: "5", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
          { jam: "6", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
          { jam: "7", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
          { jam: "8", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
          { jam: "9", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
          { jam: "10", a: "MTK", b: "MTK", c: "MTK", d: "MTK", e: "MTK", f: "MTK", g: "MTK" },
        ],
      },
    ]



    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isAnimatingUp, setIsAnimatingUp] = useState(false);
    const tableContainerRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

    const getStoredColor = () => {
      return localStorage.getItem('selectedColorTable') || '#AC2427';
    };

    const storeColor = (color) => {
      localStorage.setItem('selectedColorTable', color); // Corrected storage key
    };

    const resetToDefaultColor = () => {
      const defaultColor = '#AC2427';
      setColor1(defaultColor);
      setLabelColor1(determineLabelColor(defaultColor));
      storeColor(defaultColor);
      closeModal();
    };

    const [color1, setColor1] = useState(getStoredColor());
    const [labelColor1, setLabelColor1] = useState(null);
    const inputColorRef1 = useRef(null);

    const determineLabelColor = (backgroundColor) => {
      const contrastColor =
        chroma.contrast(backgroundColor, 'black') > chroma.contrast(backgroundColor, 'white')
          ? 'black'
          : 'white';
      return contrastColor;
    };

    const handleColorChange = (setColor, setColorState, setLabelColor) => (event) => {
      const color = event.target.value;
      setColor(color);
      setColorState(color);
      setLabelColor(determineLabelColor(color));
      storeColor(color);
    };

    const createHandleDivClick = (inputColorRef, setColor, setLabelColor, currentColor) => () => {
      inputColorRef.current.click();
      setColor(currentColor);
      setLabelColor(determineLabelColor(currentColor));
    };

    useEffect(() => {
      const handleResize = () => {
        const newIsFullScreen = window.innerHeight === screen.height;
        setIsAnimatingUp(isFullScreen && !newIsFullScreen);
        setIsFullScreen(newIsFullScreen);
      };

      window.addEventListener('resize', handleResize);

      setIsFullScreen(window.innerHeight === screen.height);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isFullScreen]);

    useEffect(() => {
      const $container = tableContainerRef.current;
      let up = false;
      let lastPosition = 0;

      const interval = setInterval(() => {
        const position = $container.scrollTop;
        const height = $container.scrollHeight;

        if (position === lastPosition) up = !up;
        lastPosition = position;

        if (up) {
          $container.scrollTop = position - 1;
        } else {
          $container.scrollTop = position + 1;
        }
      }, 30);

      return () => clearInterval(interval);
    }, [isAnimatingUp]);

    useEffect(() => {
      const $container = tableContainerRef.current;

      if (isFullScreen) {
        $container.style.height = '630px';
      } else {
        $container.style.height = '600px';
      }
    }, [isFullScreen]);

    useEffect(() => {
      setColor1(getStoredColor());
      setLabelColor1(determineLabelColor(getStoredColor()));
    }, []);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    useEffect(() => {
      const handleResize = () => {
        const newIsFullScreen = window.innerHeight === screen.height;
        setIsAnimatingUp(isFullScreen && !newIsFullScreen);
        setIsFullScreen(newIsFullScreen);
      };

      window.addEventListener('resize', handleResize);

      setIsFullScreen(window.innerHeight === screen.height);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isFullScreen]);

    useEffect(() => {
      const $container = tableContainerRef.current;
      let up = false;
      let lastPosition = 0;

      const interval = setInterval(() => {
        const position = $container.scrollTop;
        const height = $container.scrollHeight;

        if (position === lastPosition) up = !up;
        lastPosition = position;

        if (up) {
          $container.scrollTop = position - 1;
        } else {
          $container.scrollTop = position + 1;
        }
      }, 30);

      return () => clearInterval(interval);
    }, [isAnimatingUp]);

    useEffect(() => {
      const $container = tableContainerRef.current;

      if (isFullScreen) {
        $container.style.height = '630px';
      } else {
        $container.style.height = '600px';
      }
    }, [isFullScreen]);

    useEffect(() => {
      const handleResize = () => {
        const newIsFullScreen = window.innerHeight === screen.height
        setIsAnimatingUp(isFullScreen && !newIsFullScreen)
        setIsFullScreen(newIsFullScreen)
      }

      window.addEventListener('resize', handleResize)

      setIsFullScreen(window.innerHeight === screen.height)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [isFullScreen])

    useEffect(() => {
      const $container = tableContainerRef.current
      let up = false
      let lastPosition = 0

      const interval = setInterval(() => {
        const position = $container.scrollTop
        const height = $container.scrollHeight

        if (position === lastPosition) up = !up
        lastPosition = position

        if (up) {
          $container.scrollTop = position - 1
        } else {
          $container.scrollTop = position + 1
        }
      }, 30)

      return () => clearInterval(interval)
    }, [isAnimatingUp])

    useEffect(() => {
      const $container = tableContainerRef.current

      if (isFullScreen) {
        $container.style.height = '630px'
      } else {
        $container.style.height = '600px'
      }
    }, [isFullScreen])

    return (

      <div className="mx-5 justify-start w-full overflow-hidden max-h-screen">

        <div className={`relative overflow-y-auto sb-hidden border-gray-300  `} ref={tableContainerRef}>
          <table className="table-auto">
            {isColorPickerOpen && (
              <button onClick={openModal} className="hidden">Open Reset Modal</button>
            )}
            {isModalOpen && (
              <div className="fixed top-0  w-full h-full flex items-center justify-center" onClick={closeModal}>
                <div className="bg-white px-10 py-8  border shadow-container text-center" onClick={(e) => e.stopPropagation()}>
                  <div>
                    <p className="text-sm">Apakah Anda Ingin Reset</p>
                    <p className="text-sm">Warna Latar Kelas Tabel?</p>
                  </div>
                  <div className="flex justify-center items-center gap-3 mt-10">
                    <Button className='border-none bg-merah text-white rounded-md w-20 h-10 shadow-xs hover:bg-red-800 transition duration-200' onClick={resetToDefaultColor}>
                      Reset
                    </Button>
                    <Button className=' bg-white text-black rounded-md w-20 h-10 shadow-md border hover:bg-gray-50 transition duration-200 mb-1' onClick={closeModal}>
                      Batal
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <thead className="relative overflow-hidden z-10 rounded-t-sm">
              <tr onClick={openModal}>
                <th className="py-2 px-9 sticky top-0 text-center text-white rounded-tl-sm" style={{ background: color1, color: labelColor1 }}>
                  <input
                    ref={inputColorRef1}
                    type="color"
                    value={color1}
                    name='bg_1'
                    id='bg_1'
                    onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
                    className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                  />
                  Kelas
                </th>
                <th className="py-2 px-9 sticky top-0 text-center text-white" style={{ background: color1, color: labelColor1 }}>
                  <input
                    ref={inputColorRef1}
                    type="color"
                    value={color1}
                    name='bg_1'
                    id='bg_1'
                    onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
                    className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                  />
                  Jam
                </th>
                <th className="py-2 px-9 sticky top-0 text-center text-white" style={{ background: color1, color: labelColor1 }}>
                  <input
                    ref={inputColorRef1}
                    type="color"
                    value={color1}
                    name='bg_1'
                    id='bg_1'
                    onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
                    className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                  />
                  A
                </th>
                <th className="py-2 px-9 sticky top-0 text-center text-white" style={{ background: color1, color: labelColor1 }}>
                  <input
                    ref={inputColorRef1}
                    type="color"
                    value={color1}
                    name='bg_1'
                    id='bg_1'
                    onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
                    className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                  />
                  B
                </th>
                <th className="py-2 px-9 sticky top-0 text-center text-white" style={{ background: color1, color: labelColor1 }}>
                  <input
                    ref={inputColorRef1}
                    type="color"
                    value={color1}
                    name='bg_1'
                    id='bg_1'
                    onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
                    className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                  />
                  C
                </th>
                <th className="py-2 px-9 sticky top-0 text-center text-white" style={{ background: color1, color: labelColor1 }}>
                  <input
                    ref={inputColorRef1}
                    type="color"
                    value={color1}
                    name='bg_1'
                    id='bg_1'
                    onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
                    className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                  />
                  D
                </th>
                <th className="py-2 px-9 sticky top-0 text-center text-white" style={{ background: color1, color: labelColor1 }}>
                  <input
                    ref={inputColorRef1}
                    type="color"
                    value={color1}
                    name='bg_1'
                    id='bg_1'
                    onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
                    className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                  />
                  E
                </th>
                <th className="py-2 px-9 sticky top-0 text-center text-white" style={{ background: color1, color: labelColor1 }}>
                  <input
                    ref={inputColorRef1}
                    type="color"
                    value={color1}
                    name='bg_1'
                    id='bg_1'
                    onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
                    className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                  />
                  F
                </th>
                <th className="py-2 px-9 sticky top-0 text-center text-white rounded-tr-sm" style={{ background: color1, color: labelColor1 }}>
                  <input
                    ref={inputColorRef1}
                    type="color"
                    value={color1}
                    name='bg_1'
                    id='bg_1'
                    onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
                    className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                  />
                  G
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((kelasData, kelasIndex) => (
                kelasData.jadwal.map((row, jamIndex) => (
                  <tr className="border-black" key={`${kelasIndex}-${jamIndex}`}>
                    {jamIndex === 0 && (
                      <td
                        rowSpan={kelasData.jadwal.length}
                        className={`py-2 px-8  text-center border-gray-300 border  z-1 bg-gray-90 text-black ${kelasData.kelas} ${kelasData.kelas === 'X' ? '' : ''
                          }`}
                      >
                        {kelasData.kelas}
                      </td>
                    )}
                    <td
                      className={`py-2 px-8 text-center border-gray-300 border bg-gray-90  z-1 ${kelasData.kelas === 'X' && jamIndex === 0 ? '' : ''
                        }`}
                    >
                      {row.jam}
                    </td>
                    <td
                      className={`py-2 px-8 text-center border-gray-300 border bg-gray-90 z-1 ${kelasData.kelas === 'X' && jamIndex === 0 ? '' : ''
                        }`}
                    >
                      {row.a}
                    </td>
                    <td
                      className={`py-2 px-8 text-center border-gray-300 border bg-gray-90 z-1 ${kelasData.kelas === 'X' && jamIndex === 0 ? '' : ''
                        }`}
                    >
                      {row.b}
                    </td>
                    <td
                      className={`py-2 px-8 text-center border-gray-300 border bg-gray-90 z-1 ${kelasData.kelas === 'X' && jamIndex === 0 ? '' : ''
                        }`}
                    >
                      {row.c}
                    </td>
                    <td
                      className={`py-2 px-8 text-center border-gray-300 border bg-gray-90 z-1 ${kelasData.kelas === 'X' && jamIndex === 0 ? '' : ''
                        }`}
                    >
                      {row.d}
                    </td>
                    <td
                      className={`py-2 px-8 text-center border-gray-300 border bg-gray-90  z-1 ${kelasData.kelas === 'X' && jamIndex === 0 ? '' : ''
                        }`}
                    >
                      {row.e}
                    </td>
                    <td
                      className={`py-2 px-8 text-center border-gray-300 border bg-gray-90 z-1 ${kelasData.kelas === 'X' && jamIndex === 0 ? '' : ''
                        }`}
                    >
                      {row.f}
                    </td>
                    <td
                      className={`py-2 px-8 text-center border-gray-300 border bg-gray-90 z-1 ${kelasData.kelas === 'X' && jamIndex === 0 ? '' : ''
                        }`}
                    >
                      {row.g}
                    </td>
                  </tr>

                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }


  const SignedCard = () => {

    const [isFullScreen, setIsFullScreen] = useState(false)


    useEffect(() => {
      const handleResize = () => {
        setIsFullScreen(window.innerHeight === screen.height)
      }

      window.addEventListener('resize', handleResize)

      setIsFullScreen(window.innerHeight === screen.height)

      return () => {
        window.removeEventListener('resize', handleResize)
      }

    }, [])


    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper shadow-container"

          style={{ maxWidth: '160px', maxHeight: '240px' }}
        >
          <SwiperSlide>
            <Image src={Poster} style={{ width: '100%', height: '100%' }} className='rounded-lg' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Poster2} style={{ width: '100%', height: '100%' }} className='rounded-lg' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Poster3} style={{ width: '100%', height: '100%' }} className='rounded-lg' />
          </SwiperSlide>
        </Swiper>
      </>
    );
  };
  const SignedCard2 = () => {

    const [isFullScreen, setIsFullScreen] = useState(false)


    useEffect(() => {
      const handleResize = () => {
        setIsFullScreen(window.innerHeight === screen.height)
      }

      window.addEventListener('resize', handleResize)

      setIsFullScreen(window.innerHeight === screen.height)

      return () => {
        window.removeEventListener('resize', handleResize)
      }

    }, [])


    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper shadow-container"

          style={{ maxWidth: '160px', maxHeight: '240px' }}
        >
          <SwiperSlide>
            <Image src={Poster} style={{ width: '100%', height: '100%' }} className='rounded-lg' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Poster2} style={{ width: '100%', height: '100%' }} className='rounded-lg' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Poster3} style={{ width: '100%', height: '100%' }} className='rounded-lg' />
          </SwiperSlide>
        </Swiper>
      </>
    );
  };


  const Navbar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date())

    const formatDateTime = (date) => {
      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }

      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      }

      const dateString = date.toLocaleString("id-ID", dateOptions)
      const timeString = date.toLocaleString("id-ID", timeOptions)

      return {
        date: dateString,
        time: timeString,
      }
    }

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date())
      }, 1000)

      return () => {
        clearInterval(intervalId)
      }
    }, [])

    const formattedDateTime = formatDateTime(currentDateTime)

    return (
      <nav className="grid grid-cols-5  place-items-center justify-between h-20">
        <p className="text-black font-bold text-xl">{formattedDateTime.date}</p>
        <div className="flex justify-center col-span-3">
          <Image width={150} height={10} src={Logo} alt="logo" priority />
        </div>
        <p className="text-black font-bold text-3xl">{formattedDateTime.time}</p>
      </nav>
    );
  }

  const VideoPreview = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=mv-wMfBGf6Y';
    const playerRef = useRef(null);

    useEffect(() => {
      const playVideo = () => {
        const internalPlayer = playerRef.current?.getInternalPlayer();
  
        if (internalPlayer && internalPlayer.play) {
          internalPlayer.play();
        }
  
        document.removeEventListener('click', playVideo);
      };
  
      document.addEventListener('click', playVideo);
  
      return () => {
        document.removeEventListener('click', playVideo);
      };
    }, []);
  

    return (
      <div className="w-full h-full bg-white border border-gray-200 rounded-sm shadow-container">
        <div style={{ position: 'relative', paddingBottom: '53%', height: 0, overflow: 'hidden', borderRadius: '1px' }}>
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0, borderRadius: '1px' }}
            controls={true}
            playing={true}
          />
        </div>
      </div>
    );
  };


  const AkademikCard = () => {

    const [isFullScreen, setIsFullScreen] = useState(false)

    const dataAkademik = [
      { nama_kegiatan: 'Ujian Blok PKK', jadwal_mulai: '7 Februari', strip: '-', jadwal_selesai: '7 Februari' },
      { nama_kegiatan: 'Libur', jadwal_mulai: '8 Februari', strip: '-', jadwal_selesai: '10 Februari' },
      { nama_kegiatan: 'Presentasi Project Gabungan', jadwal_mulai: '12 Januari', strip: '-', jadwal_selesai: '12 Januari' },
    ];

    const tableRef = useRef(null);

    useEffect(() => {
      if (tableRef.current) {
        const $container = tableRef.current;
        let up = false;

        const interval = setInterval(() => {
          const position = $container.scrollTop;
          const height = $container.scrollHeight;

          if (position === $container.lastPosition) up = !up;
          $container.lastPosition = position;

          if (up) {
            $container.scrollTop = position - 1;
          } else {
            $container.scrollTop = position + 1;
          }
        }, 30);

        return () => clearInterval(interval);
      }
    }, []);

    // useEffect(() => {
    //   if (tableRef.current) {
    //     const $container = tableRef.current;
    //     let up = false;

    //     const interval = setInterval(() => {
    //       const position = $container.scrollTop;
    //       const height = $container.scrollHeight;

    //       if (position === $container.lastPosition) up = !up;
    //       $container.lastPosition = position;

    //       if (up) {
    //         $container.scrollTop = position - 100;
    //       } else {
    //         $container.scrollTop = position + 100;
    //       }
    //     }, 2000);

    //     return () => clearInterval(interval);
    //   }
    // }, []);

    useEffect(() => {
      const handleResize = () => {
        setIsFullScreen(window.innerHeight === screen.height)
      }

      window.addEventListener('resize', handleResize)

      setIsFullScreen(window.innerHeight === screen.height)

      return () => {
        window.removeEventListener('resize', handleResize)
      }

    }, [])

    return (
      <div>
        <div className="bg-white border border-gray-300 rounded-lg shadow-container md:flex-row md:max-w-xl max-h-32 p-3 sb-hidden hover:bg-gray-100 overflow-y-auto" style={{ height: isFullScreen ? '20vh' : 'auto' }} ref={tableRef}>
          <div className="flex justify-center items-center p-3 leading-normal m-5">
            <table className='grid-flow-row text-center'>
              <tbody className="w-full">
                {dataAkademik.map((jadwal, index) => (
                  <React.Fragment key={index}>
                    <tr className="text-lg font-bold">
                      <td className={`py-1 mb-5 ${jadwal.jadwal_mulai && !jadwal.jadwal_selesai ? 'mt-2' : ''}`} colSpan="3">
                        {jadwal.nama_kegiatan}
                      </td>
                    </tr>
                    <tr>
                      {jadwal.jadwal_mulai !== jadwal.jadwal_selesai && (
                        <>
                          <td className="py-5 pr-4">{jadwal.jadwal_mulai}</td>
                          <td className="py-5 pr-4">{jadwal.strip}</td>
                          <td className="py-5">{jadwal.jadwal_selesai}</td>
                        </>
                      )}
                      {jadwal.jadwal_mulai === jadwal.jadwal_selesai && (
                        <td className={`py-5 ${jadwal.jadwal_selesai ? '' : ''}`} colSpan="3">
                          {jadwal.jadwal_mulai}
                        </td>
                      )}
                    </tr>
                    {index < dataAkademik.length - 1 && (
                      <tr>
                        <td colSpan="3">
                          <hr className="border-t border-gray-300" />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );



  };

  const HeaderInformasi = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

    const getStoredColor2 = () => localStorage.getItem('selectedColor2') || '#AC2427';

    const [color1, setColor1] = useState(getStoredColor2());
    const [labelColor1, setLabelColor1] = useState(null);
    const inputColorRef1 = useRef(null);

    const determineLabelColor = (backgroundColor) => {
      return chroma.contrast(backgroundColor, 'black') > chroma.contrast(backgroundColor, 'white') ? 'black' : 'white';
    };

    const storeColor1 = (color) => {
      localStorage.setItem('selectedColor2', color);
    };

    const resetToDefaultColor = () => {
      const defaultColor = '#AC2427';
      setColor1(defaultColor);
      setLabelColor1(determineLabelColor(defaultColor));
      storeColor1(defaultColor);
      closeModal();
    };

    const handleColorChange = (event) => {
      const color = event.target.value;
      setColor1(color);
      setLabelColor1(determineLabelColor(color));
      storeColor1(color);
      openColorPicker();
    };

    const openColorPicker = () => {
      setIsColorPickerOpen(true);
    };

    const closeColorPicker = () => {
      setIsColorPickerOpen(false);
    };

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const createHandleDivClick = () => {
      inputColorRef1.current.click();
      openColorPicker();
    };

    return (
      <table className="w-full h-full rounded">
        {isModalOpen && (
          <div className="fixed left-[650px] top-44 w-full h-full flex items-start justify-start z-3 bg-opacity-50" onClick={closeModal}>
            <div className="bg-white px-10 py-8 border shadow-container rounded-lg text-center" onClick={(e) => e.stopPropagation()}>
              <div>
                <p className="text-sm">Apakah Anda Ingin Reset</p>
                <p className="text-sm">Warna Latar Informasi?</p>
              </div>
              <div className="flex justify-center items-center gap-3 mt-10">
                <button className='border-none bg-merah text-white rounded-md w-20 h-10 shadow-xs hover:bg-red-800 transition duration-200' onClick={resetToDefaultColor}>
                  Reset
                </button>
                <button className='bg-white text-black rounded-md w-20 h-10 shadow-md border hover:bg-gray-50 transition duration-200 mb-1' onClick={closeModal}>
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
        <thead className="relative overflow-hidden z-10 rounded-t-lg">
          <tr onClick={openModal}>
            <th className="py-2 px-9 sticky top-0 text-center text-white rounded-sm" style={{ background: color1, color: labelColor1 }}>
              <input
                ref={inputColorRef1}
                type="color"
                value={color1}
                name='bg_1'
                id='bg_1'
                onChange={handleColorChange}
                className='bg-none cursor-pointer absolute w-full h-full opacity-0'
                style={{ left: '-20px' }}
              />
              Informasi
            </th>
          </tr>
        </thead>
      </table>
    );
  };




  const Announce = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0)
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)

    const getStoredColor = () => {
      return localStorage.getItem('selectedColor') || '#AC2427'
    }

    const storeColor = (color) => {
      localStorage.setItem('selectedColor', color)
    }

    const resetToDefaultColor = () => {
      const defaultColor = '#AC2427'
      setColor1(defaultColor)
      setLabelColor1(determineLabelColor(defaultColor))
      storeColor(defaultColor)
      closeModal()
    }

    const [color1, setColor1] = useState(getStoredColor())
    const [labelColor1, setLabelColor1] = useState(null)

    const inputColorRef1 = useRef(null)


    const createHandleDivClick = (inputColorRef, setColor, setLabelColor, currentColor) => () => {
      inputColorRef.current.click()
      setColor(currentColor)
      setLabelColor(determineLabelColor(currentColor))
      storeColor(currentColor)
      openColorPicker()
    }

    const handleColorChange = (setColor, setColorState, setLabelColor) => (event) => {
      const colorPengumuman = event.target.value
      setColor(colorPengumuman)
      setColorState(colorPengumuman)
      setLabelColor(determineLabelColor(colorPengumuman))
      storeColor(colorPengumuman)
      openColorPicker()
    }

    const determineLabelColor = (backgroundColor) => {
      const contrastColor =
        chroma.contrast(backgroundColor, 'black') > chroma.contrast(backgroundColor, 'white')
          ? 'black'
          : 'white'
      return contrastColor
    }

    const openColorPicker = () => {
      setIsColorPickerOpen(true)
    }

    const closeColorPicker = () => {
      setIsColorPickerOpen(false)
    }

    const openModal = () => {
      setIsModalOpen(true)
    }

    const closeModal = () => {
      setIsModalOpen(false)
    }




    const fetchData = useCallback(async () => {
      setIsLoading(true)
      try {
        if (token) {
          const response = await axios.get(
            "https://api.e1.ikma.my.id/api/admin/info/get/on",
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )

          if (response.data && response.data.data) {
            const { data } = response.data
            setData(data)
          } else {
            console.error("Invalid data format in the response:", response)
          }
        } else {
          console.warn(
            "Token is not available. User may not be authenticated."
          )
        }
      } catch (error) {
        console.error("Error fetching data:", error.message || error)
      } finally {
        setIsLoading(false)
      }
    }, [token])


    useEffect(() => {
      fetchData()

      const intervalId = setInterval(() => {
        setCurrentAnnouncementIndex(
          (prevIndex) => (prevIndex + 1) % data.length
        )
      }, 3 * 60 * 1000)

      return () => {
        clearInterval(intervalId)
      }
    }, [token, data.length, fetchData])

    const useInterval = (callback, delay) => {
      const savedCallback = useRef()

      useEffect(() => {
        savedCallback.current = callback
      }, [callback])

      useEffect(() => {
        const tick = () => {
          savedCallback.current()
        }

        if (delay !== null) {
          const id = setInterval(tick, delay)
          return () => clearInterval(id)
        }
      }, [delay])
    }

    useInterval(() => {
      fetchData()
    }, 3 * 60 * 1000)

    const [isFullScreen, setIsFullScreen] = useState(false)

    useEffect(() => {
      const handleResize = () => {
        setIsFullScreen(window.innerHeight === screen.height)
      }

      window.addEventListener('resize', handleResize)

      setIsFullScreen(window.innerHeight === screen.height)

      return () => {
        window.removeEventListener('resize', handleResize)
      }

    }, [])




    return (
      <div>
        {isColorPickerOpen && (
          <button onClick={openModal} className="hidden">Open Reset Modal</button>
        )}
        {isModalOpen && (
          <div className="fixed top-0 w-full h-full flex items-center justify-center" onClick={closeModal}>
            <div className="bg-white px-10 py-8 border shadow-container rounded-lg text-center" onClick={(e) => e.stopPropagation()}>
              <div>
                <p className="text-sm">Apakah Anda Ingin Reset</p>
                <p className="text-sm">Warna Latar Pengumuman?</p>
              </div>
              <div className="flex justify-center items-center gap-3 mt-10">
                <Button className='border-none bg-merah text-white rounded-md w-20 h-10 shadow-xs hover:bg-red-800 transition duration-200' onClick={resetToDefaultColor}>
                  Reset
                </Button>
                <Button className=' bg-white text-black rounded-md w-20 h-10 shadow-md border hover:bg-gray-50 transition duration-200 mb-1' onClick={closeModal}>
                  Batal
                </Button>
              </div>
            </div>
          </div>
        )}
        <div onClick={openModal} className="gap-3 text-center p-2 fixed bottom-0 w-full text-white flex items-center justify-center" style={{ background: color1, color: labelColor1, height: isFullScreen ? '8vh' : 'auto' }}>
          <FaVolumeUp />
          <input
            ref={inputColorRef1}
            type="color"
            value={color1}
            name='bg_1'
            id='bg_1'
            onChange={handleColorChange(setColor1, setColor1, setLabelColor1)}
            className='bg-none cursor-pointer absolute w-full h-full opacity-0'
          />{data.length > 0 && (
            <p className="text-md font-bold">
              {data[currentAnnouncementIndex].pengumuman}
            </p>
          )}
        </div>
      </div>
    )
  }




  return (
    <div>
      <Head>
        <title>Signed SMK Telkom Banjarbaru</title>
      </Head>
      <div className='w-screen h-screen overflow-hidden'>
        <div className="place-content-center">
          <Navbar />
        </div>
        <div className="grid grid-cols-4 grid-rows-4">
          <div className="col-span-3">
            <Table />
          </div>
          <div className="mr-2">
            <div className="mb-2">
              <HeaderInformasi />
            </div>
            <div className="mb-2">
              <VideoPreview />
            </div>
            <div className="mb-2">
              <AkademikCard />
            </div>
            <div className="flex justify-center items-center top-0">
              <SignedCard />
              <SignedCard2 />
            </div>
          </div>
        </div>
        <Announce />
      </div>
    </div>
  )

})


export default withAuth(Signed)