import Link from 'next/link';

const Nav = () => (
   <div>
       <nav>
           <ul>
           <li><Link href="/index"><a>Index</a></Link></li>
            <li><Link href="/news"><a>Main News</a></Link></li>
            <li><Link href="/business"><a>Business</a></Link></li>
            <li><Link href="/sport"><a>Sport</a></Link></li>
            <li><Link href="/science"><a>Science</a></Link></li>
            <li><Link href="/health"><a>Health</a></Link></li>
            <li><Link href="/technology"><a>Technology</a></Link></li>
           </ul>
       </nav>
      
       <style jsx>{`
        nav {
            max-width: 2000px;
            background: #f0f0f0;
            border: 1px solid #ccc;
            border-right: none;
        }


        nav ul {
            display: flex;
            flex-direction: row;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            list-style: none;
            float: left;
            flex-grow: 1;
            text-align: center;
            border-left: 1px solid #fff;
            border-right: 1px solid #ccc;
            width: 16.6667%; 
            width: calc(100% / 6);
            box-sizing: border-box;
        }

        nav ul li:first-child {
            border-left: none;
        }

        nav ul li a {
            font-size: 1.em;
            display: block;
            text-decoration: none;
            color: #616161;
            padding: 5px 0;
        }

        nav ul li:hover {
            background: #87C94A;
        }
        nav ul li a:hover {
            color: white;
        }

        `}</style>
   </div> 
)

export default Nav;

