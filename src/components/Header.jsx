import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '../img/bx_cloud_download.png'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import pdf from '../img/pdffile.pdf'

function Header() {
    const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false)

    const links = [
        { label: "Home", href: "/" },
        { label: "Developers", href: "#" },
        { label: "Community", href: "#" },
        { label: "Media", href: "#" },
        { label: "Ecosystem", href: "#" },
        { label: "About", href: "#" }
    ]



    return (
        <header className='header-public'>
            <div className="container">
                <div className="navbar-item flex-wrap">

                    <div className="logo-box">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="194.483" height="48.433" viewBox="139.983 35.983 194.483 48.433"><g data-name="logo"><g data-name="Group 15"><path d="m279.263 72.267 4.401 6.035h-2.63l-4.04-5.814h-.388v5.814h-2.133V64.101h2.52c1.882 0 3.238.36 4.069 1.051a3.898 3.898 0 0 1 1.384 3.101 4.036 4.036 0 0 1-.858 2.603 3.943 3.943 0 0 1-2.325 1.411Zm-2.658-1.605h.692c2.02 0 3.045-.775 3.045-2.325 0-1.44-.993-2.187-2.962-2.187h-.776l.001 4.512Z" fill="#fff" fillRule="evenodd" data-name="Path 27" /><path d="M271.65 66.15h-5.703v3.405h5.536v2.021h-5.536v4.735h5.703v2.02h-7.835V64.13h7.835v2.02Z" fill="#fff" fillRule="evenodd" data-name="Path 26" /><path d="m253.488 69.804 5.536-5.675h2.852l-6.423 6.423 6.455 7.778h-2.884l-5.12-6.312-.444.443v5.869h-2.131V64.129h2.131v5.675Z" fill="#fff" fillRule="evenodd" data-name="Path 25" /><path d="M233.804 71.16a6.95 6.95 0 0 1 2.188-5.15 7.232 7.232 0 0 1 5.26-2.158 7.42 7.42 0 0 1 7.391 7.364 6.985 6.985 0 0 1-2.187 5.205 7.506 7.506 0 0 1-10.243.222 6.844 6.844 0 0 1-2.409-5.483Zm2.16.027a5.154 5.154 0 0 0 1.577 3.876 5.048 5.048 0 0 0 3.627 1.523 5.117 5.117 0 0 0 3.766-1.55 5.2 5.2 0 0 0 1.522-3.792 5.112 5.112 0 0 0-1.522-3.793 5.012 5.012 0 0 0-3.737-1.55 5.1 5.1 0 0 0-3.737 1.55 5.18 5.18 0 0 0-1.496 3.737Z" fill="#fff" fillRule="evenodd" data-name="Path 24" /><path d="m228.323 72.267 4.402 6.035h-2.63l-4.042-5.814h-.387v5.814h-2.133V64.101h2.52c1.882 0 3.238.36 4.069 1.051a3.898 3.898 0 0 1 1.384 3.101 3.946 3.946 0 0 1-3.183 4.014Zm-2.685-1.605h.692c2.02 0 3.045-.775 3.045-2.325 0-1.44-.993-2.187-2.963-2.187h-.775v4.512Z" fill="#fff" fillRule="evenodd" data-name="Path 23" /><path d="M212.377 78.33V64.13h2.132a9.772 9.772 0 0 1 2.27.222 3.119 3.119 0 0 1 1.44.744c.41.376.732.84.94 1.357.238.521.36 1.087.36 1.66a3.31 3.31 0 0 1-1.163 2.575 3.351 3.351 0 0 1 1.772 1.356c.445.652.676 1.426.662 2.214a3.845 3.845 0 0 1-1.163 2.824c-.44.45-.98.79-1.578.993a9.602 9.602 0 0 1-2.408.277h-3.264Zm2.132-8.11h.662a2.392 2.392 0 0 0 1.744-.525c.39-.419.59-.98.554-1.55a1.961 1.961 0 0 0-.58-1.523 2.483 2.483 0 0 0-1.66-.526h-.745v4.125Zm0 6.091h1.329a3.216 3.216 0 0 0 2.131-.579 2.01 2.01 0 0 0 .72-1.55 1.986 1.986 0 0 0-.692-1.55 3.553 3.553 0 0 0-2.409-.609h-1.075l-.004 4.288Z" fill="#fff" fillRule="evenodd" data-name="Path 22" /></g><g data-name="Group 14"><path d="M331.198 44.666v12.18h-2.131v-12.18H325.8v-2.021h8.664v2.02h-3.267Z" fill="#fff" fillRule="evenodd" data-name="Path 21" /></g><g data-name="Group 13"><path d="M311.404 56.847V41.676L321.758 52.5v-9.856h2.132v15.06l-10.354-10.797v9.939h-2.132Z" fill="#fff" fillRule="evenodd" data-name="Path 20" /></g><g data-name="Group 12"><path d="M308.58 44.666h-5.703v3.405h5.537v2.022h-5.537v4.733h5.704v2.02h-7.835V42.646h7.835v2.02Z" fill="#fff" fillRule="evenodd" data-name="Path 19" /></g><g data-name="Group 11"><path d="M292.19 49.455h5.869v.471a9.535 9.535 0 0 1-.387 2.824 6.24 6.24 0 0 1-1.246 2.131 6.4 6.4 0 0 1-5.038 2.215 6.868 6.868 0 0 1-5.095-2.16 7.378 7.378 0 0 1 5.288-12.568 6.965 6.965 0 0 1 3.1.692 8.779 8.779 0 0 1 2.714 2.214l-1.522 1.467a5.169 5.169 0 0 0-4.263-2.324 5.074 5.074 0 0 0-3.765 1.55 5.175 5.175 0 0 0-1.523 3.821 5.016 5.016 0 0 0 1.69 3.903 5.1 5.1 0 0 0 3.46 1.412c1.05 0 2.064-.382 2.852-1.076a3.902 3.902 0 0 0 1.411-2.574h-3.546v-1.998Z" fill="#fff" fillRule="evenodd" data-name="Path 18" /></g><g data-name="Group 10"><path d="M281.477 42.645v14.202h-2.131V42.645h2.131Z" fill="#fff" fillRule="evenodd" data-name="Path 17" /></g><g data-name="Group 9"><path d="M276.522 42.645v14.202h-6.312v-2.021h4.18V42.645h2.132Z" fill="#fff" fillRule="evenodd" data-name="Path 16" /></g><g data-name="Group 8"><path d="M256.007 42.645v12.18h4.18v2.022h-6.311V42.645h2.131Z" fill="#fff" fillRule="evenodd" data-name="Path 15" /></g><g data-name="Group 7"><path d="M251.052 44.666h-5.703v3.405h5.537v2.022h-5.537v4.733h5.703v2.02h-7.835V42.646h7.835v2.02Z" fill="#fff" fillRule="evenodd" data-name="Path 14" /></g><g data-name="Group 6"><path d="M238.069 44.666v12.18h-2.132v-12.18h-3.267v-2.021h8.665v2.02h-3.267Z" fill="#fff" fillRule="evenodd" data-name="Path 13" /></g><g data-name="Group 5"><path d="M218.246 56.847V41.676L228.599 52.5v-9.856h2.132v15.06l-10.354-10.797v9.939h-2.131Z" fill="#fff" fillRule="evenodd" data-name="Path 12" /></g><g data-name="Group 4"><path d="M214.841 42.645v14.202h-2.131V42.645h2.131Z" fill="#fff" fillRule="evenodd" data-name="Path 11" /></g><g data-name="Group 3"><path d="M270.57 48.21a.98.98 0 0 1-.97-.97v-9.274a.969.969 0 1 1 1.939 0v9.274a.98.98 0 0 1-.97.97Z" fill="#fff" fillRule="evenodd" data-name="Path 10" /><path d="M270.57 37.966v9.274" fill="#00a651" fillRule="evenodd" data-name="Line 3" /></g><g data-name="Group 2"><path d="M265.338 53.663a.98.98 0 0 1-.97-.969V43.42a.969.969 0 1 1 1.939 0v9.274a.963.963 0 0 1-.97.97Z" fill="#fff" fillRule="evenodd" data-name="Path 9" /><path d="M265.338 43.42v9.274" fill="#00a651" fillRule="evenodd" data-name="Line 2" /></g><g data-name="Group 1"><path d="M260.105 50.867a.98.98 0 0 1-.969-.969v-9.274a.969.969 0 1 1 1.938 0v9.274a.98.98 0 0 1-.969.97Z" fill="#fff" fillRule="evenodd" data-name="Path 8" /><path d="M260.105 40.624v9.274" fill="#00a651" fillRule="evenodd" data-name="Line 1" /></g><g data-name="Group 1126"><path d="M173.619 84.393a1.43 1.43 0 0 1-1.44-1.44V37.44a1.43 1.43 0 0 1 1.44-1.44 1.43 1.43 0 0 1 1.44 1.44v45.513a1.43 1.43 0 0 1-1.44 1.44Z" fill="#fff" fillRule="evenodd" data-name="Path 7" /><path d="M153.631 46.466a1.605 1.605 0 0 0-1.076-3.018 7.802 7.802 0 0 0-5.536 7.06c-.222 3.792 2.74 7.86 6.505 8.139 4.817.33 9.662.082 14.618.082V36.14h-3.046v19.407c-3.848 0-7.365.165-10.852-.056-2.27-.138-3.654-1.8-3.931-4.041-.277-2.215.662-4.153 2.851-4.817.19-.084.328-.111.467-.166Z" fill="#fff" fillRule="evenodd" data-name="Path 6" /><path d="M153.243 77.112a1.564 1.564 0 0 0 1.8-1.91c-.138-.579-.609-1.024-1.716-1.328a4.152 4.152 0 0 1-2.99-4.762c.248-2.325 1.689-4.042 4.097-4.18 3.405-.222 6.838-.056 10.576-.056v19.46h3.073v-22.45s-10.133-.388-15.088.138c-3.903.413-6.478 4.761-5.924 8.499a7.563 7.563 0 0 0 6.172 6.59Z" fill="#fff" fillRule="evenodd" data-name="Path 5" /><path d="M159.776 52.279h.196a1.577 1.577 0 0 0 1.573-1.58V36.302a.027.027 0 0 0-.028-.027c-5.537-.11-11.018-.858-15.805 2.796-5.01 3.851-8.413 11.908-2.49 20.157a1.624 1.624 0 0 1 0 1.855c-3.793 5.37-4.569 11.13-.527 17.026 4.596 6.755 11.6 6.454 18.797 5.98V69.72a1.562 1.562 0 0 0-1.495-1.578 1.564 1.564 0 0 0-1.66 1.578v10.991c-6.506.968-11.184-.965-13.59-5.398-2.742-5.04-1.745-8.804 4.069-15.144-5.426-5.26-6.728-9.468-4.402-14.399 2.27-4.845 6.284-6.644 13.787-6.035.016 0 .028.013.028.028V50.7a1.52 1.52 0 0 0 1.547 1.579Z" fill="#fff" fillRule="evenodd" data-name="Path 4" /><path d="M193.496 46.466a1.605 1.605 0 0 1 1.075-3.018 7.802 7.802 0 0 1 5.537 7.06c.222 3.792-2.74 7.86-6.506 8.139-4.817.33-9.662.082-14.617.082V36.14h3.045v19.407c3.848 0 7.365.165 10.852-.056 2.27-.138 3.655-1.8 3.932-4.041.277-2.215-.662-4.153-2.852-4.817-.19-.084-.326-.111-.466-.166Z" fill="#fff" fillRule="evenodd" data-name="Path 3" /><path d="M193.884 77.11a1.564 1.564 0 0 1-1.8-1.91c.138-.58.609-1.024 1.716-1.329a4.152 4.152 0 0 0 2.99-4.761c-.248-2.326-1.69-4.042-4.097-4.181-3.405-.222-6.838-.055-10.576-.055v19.518h-3.072V61.858s10.133-.387 15.088.138c3.903.414 6.477 4.762 5.924 8.5a7.565 7.565 0 0 1-6.173 6.614Z" fill="#fff" fillRule="evenodd" data-name="Path 2" /><path d="M187.379 52.279h-.222a1.577 1.577 0 0 1-1.578-1.58V36.278c5.537-.11 11.018-.858 15.805 2.796 5.01 3.848 8.416 11.905 2.492 20.154a1.625 1.625 0 0 0 0 1.855c3.792 5.37 4.568 11.13.526 17.026-4.596 6.755-11.6 6.454-18.798 5.98V69.72a1.6 1.6 0 0 1 1.496-1.578h.027a1.579 1.579 0 0 1 1.66 1.578v10.991c6.507.97 11.186-.969 13.594-5.398 2.74-5.04 1.744-8.804-4.07-15.144 5.426-5.26 6.728-9.468 4.401-14.399-2.27-4.845-6.284-6.644-13.814-6.035V50.7a1.514 1.514 0 0 1-1.52 1.579Z" fill="#fff" fillRule="evenodd" data-name="Path 1" /></g></g></svg>

                        </Link>
                    </div>

                    <ul className='links meno-collapsed d-xl-flex d-none'>
                        {
                            links.map((link, idx) => {
                                return <li key={link.label} className={idx === 0 ? ' active ' : ''}>
                                    <a href={link.href} className='nav-link'>{link.label}</a>
                                </li>
                            })
                        }
                    </ul>
                    <Sidebar links={links} setMobileSidebarOpen={setMobileSidebarOpen} mobileSidebarOpen={mobileSidebarOpen} />


                    <button className='btn-navbar-search d-xl-block d-none '>
                        <SearchIcon />
                    </button>
                    <div className="search-collapsed d-none ">
                        <button className="btn-search"><SearchIcon /></button>
                        <input type="text" className="search-input" />
                        <CloseIcon />

                    </div>
                    <a href="#" className='nav-user ms-auto ms-xl-1'>
                        <PersonIcon />
                    </a>

                    <button className='btn-down-white-paper  d-none d-xl-block'>
                        <img src={DownloadIcon} alt="download icon" className='mx-2' /> Download white paper
                    </button>
                    <button className='d-block d-xl-none btn bg-transparent text-white' onClick={e => setMobileSidebarOpen(true)} >
                        <MenuIcon />
                    </button>
                </div>

            </div>
            <button className='btn-down-white-paper w-100  py-2 mx-0 mt-4 d-flex  d-xl-none px-4'>
                <img src={DownloadIcon} alt="download icon" className='mx-2' /> Download white paper
                <ChevronRightIcon className='ms-auto' />
            </button>

        </header>
    )
}

export default Header