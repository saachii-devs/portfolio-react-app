import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from 'styled-components';

export default function App(){

  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    ::-webkit-scrollbar-thumb{
      display:none;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
 /* code to be written */
 
  `;
  const parentDiv = styled.div`
    overflow: hidden;
    ::-webkit-scrollbar-thumb{
      display:none;
    }
    
  `

  return(
  <parentDiv>
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
    </parentDiv>
  );
}
