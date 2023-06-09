import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from 'styled-components';

export default function App(){

  const Container = styled.div`
    height: 100vh;
  
  `;
  return(
  
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>

  );
}
