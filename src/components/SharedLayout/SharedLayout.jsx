import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Container, Header, Link } from "components/SharedLayout/SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
        <ToastContainer autoClose={1500}/>
      </Suspense>
    </Container>
  );
};