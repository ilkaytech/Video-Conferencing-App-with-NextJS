import React from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      Navbar
      {children}
      Footer
    </main>
  );
};

export default RootLayout;
