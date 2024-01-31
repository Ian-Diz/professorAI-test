import { ReactNode } from "react";
import "@styles/globals.css";

export const metadata = {
  title: "ProfessorAI Front-End Test",
  description: "Front-End take home test for ProfessorAI front-end position",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="div0">
          <div className="div1" />
          <div className="div2" />
          <div className="div3" />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
