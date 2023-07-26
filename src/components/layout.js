import Navbar from "../components/Navbar";

export const siteTitle = 'Maxine VSG';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{overflow: 'hidden'}}>{children}</main>
    </div>
  );
}
