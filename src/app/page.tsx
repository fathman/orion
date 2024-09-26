import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight, faEarthAmericas, faEnvelope, faGraduationCap, faLaptopCode, faMobileScreen, faPlay, faScrewdriverWrench, faTv, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import DataProjectList from '@/data/DataProjectList';
import Card from '@/components/Card';
import Image from 'next/image';



export default function Home() {

  return (
    <div>
      <nav className="container flex-wrap justify-between p-8 mx-auto font-mono text-xs navbar text-light text-slate-400">
        <p>developed by fuad mahrus fahtoni</p>
        <label className="swap">
          <input type="checkbox" className="theme-controller" value="dark" />

          <div className="swap-off flex items-center">
            theme light
            <svg
              className="ms-2 size-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

          </div>

          <div className="swap-on flex items-center">
            theme dark
            <svg
              className="ms-2 size-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>

          </div>
        </label>

        <p className="">created at : 12 August, 2024 </p>

      </nav>
      <div className="container my-24 mx-auto px-8 flex flex-col justify-center font-serif xl:min-h-[30rem] xl:text-center">
        <p className="mb-2 text-xl font-thin lg:mb-6 md:text-2xl lg:text3xl xl:text-4xl">
          <span className="tooltip tooltip-secondary" data-tip="nickname : thoni"> fuad mahrus fathoni </span>
        </p>
        <p className="mb-4 text-4xl font-black lg:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"> Fullstack Developer </p>

        <p className="max-w-3xl mb-4 md:text-xl xl:text-2xl xl:max-w-5xl xl:mx-auto">
          I can create <b>dynamic</b> or <b>custom-built</b> websites tailored to your <b>company&aposs needs</b>,
          <br className="hidden xl:block" />helping your business advance to the next level
        </p>
        <div className="flex justify-start xl:justify-center gap-x-8 gap-y-2">
          <a href="https://github.com/fmhrs" target="_blank" className="link link-hover">
            <FontAwesomeIcon icon={faGithub} className='me-2' />github.com/fmhrs
          </a>
          <a href="https://fmhrs.github.io/public/playground" target="_blank" className="link link-hover group">
            <FontAwesomeIcon icon={faPlay} className='me-2' /> playground
          </a>
        </div>
      </div>

      <div className="container flex flex-col justify-center px-8 mx-auto mb-24 font-serif" id="project-experience ">
        <p className="mb-4 text-2xl sm:text-3xl lg:text-4xl sm:text-center lg:mb-8">
          <a href="#project-experience">Project Experience </a>
        </p>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-start md:text-end">
              <time className="font-mono italic">2018</time>
              <div className="mb-4">
                <div className="text-lg font-black"> Starting college </div>
                Saya memulai belajar pemrograman di Universitas Pembangunan Nasional &quotVeteran&quot Jawa Timur. disana saya menempuh Jurusan
                <div className="kbd">Informatika</div> yang ada pada sebuah Fakultas yang beranama <div className="kbd">Ilmu Komputer</div>
              </div>
              <div className="mb-4">
                <div className="text-lg font-black"> Mobile Developer Comunity </div>
                Menjadi anggota komunitas <div className="kbd">Mobile Developer</div> dan memperoleh juara 1 pada lomba internal komunitas
                mob-dev dengan membuat aplikasi android kalkulator bangun ruang
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-4 timeline-end">
              <time className="font-mono italic">2019</time>
              <div className="mb-4">
                <div className="text-lg font-black">Project Android</div>
                Membuat aplikasi android tentang pembelajaran menggunakan salah satu sub materi hukum
              </div>
              <div className="mb-4">
                <div className="text-lg font-black">Project Aljaya</div>
                Membangun aplikasi Company Profile serta aplikasi toko online yang terdiri dari:
                <br />
                <ul className="list-disc ms-6">
                  <li>Aplikasi Website untuk management toko online </li>
                  <li>Aplikasi Android untuk pelanggan melakukan transaksi </li>
                  <li>Aplikasi Android untuk driver mengirim pesanan </li>
                </ul>
              </div>
              <div className="mb-4">
                <div className="text-lg font-black">Kepengurusan UKM</div>
                Mengikuti kepengurusan UKM Veteran E-sport sebagai PSDM
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-end">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-black">Kepengurusan UKM</div>
              Menjabat sebagai Wakil ketua 2 Koordinator UKM &quotVeteran&quot Jawa Timur
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-start md:text-end">
              <time className="font-mono italic">2021</time>
              <div className="mb-4">
                <div className="text-lg font-black">Praktek Kerja Lapangan</div>
                Membangun Aplikasi Pendataan Tugas Siswa Berbasis Website menggunakan Power Designer (untuk membuat ERD, CDM, dan PDM),
                Bootstrap sebagai framework ui yang responsive, serta javascript library berupa jQuery dan dataTable untuk eksekusi data.
              </div>
              <div className="mb-4">
                <div className="text-lg font-black">Internship PT. Adi Joyo Kusumo</div>
                Magang sebagai software engginer di PT. Adi Joyo Kusumo
                <ul className="list-disc ms-6 md:me-6">
                  <li className="md:[direction:rtl]" dir="ltr">
                    Membangun aplikasi android sederhana yang dapat melihat aktifitas serta mengatur daya 3 buah lampu apill 🚦
                  </li>
                  <li className="md:[direction:rtl]" dir="ltr">
                    Membangun aplikasi website yang tidak hanya dapat mengatur hak akses, tetapi juga dapat digunakan untuk memonitor status device yang telah terinstall di Indonesia. Aplikasi ini terintegrasi dengan Android untuk mengambil foto dan lokasi device yang hak akses pegawai nya juga ditentukan pada aplikasi website juga</li>
                  <li className="md:[direction:rtl]" dir="ltr">
                    Beberapa aplikasi website yang terintegerasi dengan aplikasi android untuk monitoring setiap status lampu dan
                    mengatur lokasi dan jumlah traffic yang ada pada suatu daerah
                  </li>
                  <li className="md:[direction:rtl]" dir="ltr">Restfull API untuk mengintergrasikan seluruh perangkat </li>
                  <li className="md:[direction:rtl]" dir="ltr">Aplikasi Website untuk mengatur dan monitoring jadwal kerja </li>
                </ul>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-end">
              <div className="mb-4">
                <time className="font-mono italic">2022</time>
                <div className="text-lg font-black">faranilabs</div>
                Aplikasi kelas canva online. <div className="kbd">not continued</div>
              </div>
              <div className="mb-4">
                <div className="text-lg font-black">cetakmerch</div>
                Aplikasi website untuk memonitoring penjualan pada platform ecomerce. dapat melihat dan membandingkan pendapatan perbulan
                serta push notification hasil pendapatan ke email terkait. <br />tech : <div className="kbd">laravel</div>
                <div className="kbd">datatable</div>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-start md:text-end">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">Publish paper Science Citra (SCR)</div>
              Melakukan 2 publish paper tentang machine learning untuk mengklasifikasikan object yang berjudul &quotKlasifikasi Penyakit Daun
              Tomat Menggunakan Algoritma K-NN Berdasarkan Ekstraksi Fitur GLCM dan LBP&quot dan &quotKlasifikasi Penyakit Daun Anggur Menggunakan
              Metode K-Nearest Neighbor Berdasarkan Gray Level Co-Occurence Matrix&quot
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-end">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">Lulus Kuliah</div>
              Secara resmi lulus sebagai Sarjana Ilmu Komputer <div className="kbd">S.KOM</div> dengan
              <div className="font-mono kbd tabular-nums">IPK 3.7</div> pada jurusan <div className="kbd">informatika</div>

              <div className="h-4"></div>

              <div className="text-lg font-black">Uji Kompetensi</div>
              Memperoleh sertifikat kompetensi <div className="kbd">Junior Web Programmer</div> dibawah Lembaga Sertifikasi Profesi UPN
              &quotVETARAN&quot JAWA TIMUR dan Badan Nasional Sertifikasi Profesi (BNSP)
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-end">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">Now</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="container flex flex-col justify-center px-8 mx-auto mb-24 font-serif">
        <div className="flex mb-4 lg:flex-row xl:flex-col xl:mb-15">
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-center">
            <a href="./projects.html">Project List </a>
          </p>
          <p
            className="m-auto font-mono transition-all me-0 text-slate-500 hover:text-slate-700 hover:underline decoration-wavy underline-offset-4"
          >
            <a href="./projects.html">
              Show more
              <FontAwesomeIcon icon={faArrowRight} className="!hidden ms-2 sm:!inline" />
              <FontAwesomeIcon icon={faChevronRight} className="sm:!hidden" />
            </a>
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" id="project-list">


          {DataProjectList.map(function (ProjectList, index) {
            return <Card key={"project" + (index + 1)} devices={ProjectList.devices} visibility={ProjectList.visibility} createdTime={ProjectList.createdTime} title={ProjectList.title} language={ProjectList.language} imageSource={ProjectList.imageSource} imageAlt={ProjectList.imageAlt} description={ProjectList.description} hrefTarget={ProjectList.hrefTarget} />
          })}


        </ul>
      </div>

      <div id="biography" className="container flex flex-col justify-center px-8 mx-auto mb-24 font-serif xl:max-w-screen-lg">
        <p className="mb-8 text-2xl xl:mb-16 sm:text-3xl lg:text-4xl mb-15 xl:text-center"><a href="#biography">My Biography</a></p>

        <div className="grid grid-cols-2"> </div>

        <div className="flex flex-col min-[500px]:flex-row mb-4">
          <span className="inline-block min-w-28 text-nowrap text-slate-500"><FontAwesomeIcon icon={faUser} className="w-4 me-4" />Fullname</span>
          <span className="hidden min-[500px]:inline-block mx-2">:</span>
          <p> Fuad Mahrus Fathoni (thoni)</p>
        </div>
        <div className="flex flex-col min-[500px]:flex-row mb-4">
          <span className="inline-block min-w-28 text-nowrap text-slate-500"><FontAwesomeIcon icon={faEnvelope} className="w-4 me-4" />E-mail</span>
          <span className="hidden min-[500px]:inline-block mx-2">:</span>
          <p> fuadmahrusfathoni@gmail.com</p>
        </div>
        <div className="flex flex-col min-[500px]:flex-row mb-4">
          <span className="inline-block min-w-28 text-nowrap text-slate-500"><FontAwesomeIcon icon={faLaptopCode} className="w-4 me-4" />Jobs</span>
          <span className="hidden min-[500px]:inline-block mx-2">:</span>
          <p>
            Software Enginner
            <span className="whitespace-pre-line"> (Fullstack Web Developer, Android Developer)</span>
          </p>
        </div>
        <div className="flex flex-col min-[500px]:flex-row mb-4">
          <span className="inline-block min-w-28 text-nowrap text-slate-500"><FontAwesomeIcon icon={faGraduationCap} className='w-4 me-4' /> Education</span>

          <span className="hidden min-[500px]:inline-block mx-2">:</span>
          <p>
            Bachelor of computer science <span className="whitespace-pre"> </span>
            <span className="whitespace-pre-line">(Universitas Pembangunan Nasional Veteran &quotJawa Timur&quot)</span>
          </p>
        </div>
        <div className="flex flex-col min-[500px]:flex-row mb-4">
          <span className="inline-block min-w-28 text-nowrap text-slate-500"><FontAwesomeIcon icon={faEarthAmericas} className='w-4 me-4' />Live in</span>
          <span className="hidden min-[500px]:inline-block mx-2">:</span>
          <p> (Indonesia) - Jawa Timur</p>
        </div>
        <div className="flex flex-col min-[500px]:flex-row mb-4">
          <span className="inline-block min-w-28 text-nowrap text-slate-500"><FontAwesomeIcon icon={faTv} className='w-4 me-4' />Web Skill</span>
          <span className="hidden min-[500px]:inline-block mx-2">:</span>
          <div className="flex flex-wrap gap-2 xl:justify-center items-center">
            <Image width={65} height={18} className="h-5" alt="html5" src="/images/badge-html-5.svg" />
            <Image width={57} height={18} className="h-5" alt="CSS3" src="/images/badge-css-3.svg" />
            <Image width={81} height={18} className="h-5" alt="Javascript" src="/images/badge-javascript.svg" />
            <Image width={65} height={18} className="h-5" alt="JQuery" src="/images/badge-jquery.svg" />
            <Image width={81} height={18} className="h-5" alt="Bootstrap" src="/images/badge-bootstrap.svg" />
            <Image width={89} height={18} className="h-5" alt="Code Igniter"
              src="/images/badge-code-igniter.svg"
            />
            <Image width={73} height={18} className="h-5" alt="MySql" src="/images/badge-mysql.svg" />
          </div>
        </div>

        <div className="flex flex-col min-[500px]:flex-row mb-4">
          <span className="inline-block min-w-28 text-nowrap text-slate-500"><FontAwesomeIcon icon={faMobileScreen} className='w-4 me-4' />Mobile Skill</span>
          <span className="hidden min-[500px]:inline-block mx-2">:</span>
          <div className="flex flex-wrap gap-2 xl:justify-center items-center">
            <Image width={109} height={18} className="h-5" alt="AndroiMod Studio"
              src="/images/badge-android-studio.svg"
            />
            <Image width={53} height={18} className="h-5" alt="Java" src="/images/badge-java.svg" />
            <Image width={59} height={18} className="h-5" alt="Kotlin" src="/images/badge-kotlin.svg" />
            <Image width={59} height={18} className="h-5" alt="MQTT" src="/images/badge-mqtt.svg" />
          </div>
        </div>

        <div className="flex flex-col min-[500px]:flex-row mb-8">
          <span className="inline-block min-w-28 text-nowrap text-slate-500"><FontAwesomeIcon icon={faScrewdriverWrench} className='w-4 me-4' />Tool Kits</span>
          <span className="hidden min-[500px]:inline-block mx-2">:</span>
          <div className="flex flex-wrap gap-2 xl:justify-center">
            Visual Studio Code, Post Man, Heidi SQL, Android Studio, XAMPP
          </div>
        </div>
      </div>

      <footer className="p-10 footer text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
            ></path>
          </svg>
          <p>
            Project started on Tuesday, August 12, 2024
            <br />
            Developed By Fuad Mahrus Fathoni
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Projects</h6>
          <a className="link link-hover">Smart Warning Lights</a>
          <a className="link link-hover">Alat pemberi isyarat Lalu Lintas</a>
          <a className="link link-hover">Attendance System</a>
          <a className="link link-hover">ERP System</a>
        </nav>
        <nav>
          <h6 className="footer-title">Pages</h6>
          <a className="link link-hover">Playground</a>
          <a className="link link-hover">My Profile</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Media</h6>
          <a className="link link-hover">Github</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">YouTube</a>
          <a className="link link-hover">Tik-Tok</a>
        </nav>
      </footer>
    </div >
  );
}
