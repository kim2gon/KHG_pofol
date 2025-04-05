import React, { useState, useRef, useEffect } from "react";

const ScrollSections = () => {
  const totalSections = 7; // 총 섹션의 수
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 방지용 boolean
  
  // 각 섹션에 대한 참조를 section1, section2, ..., section7로 관리
  const sectionRefs = useRef({
    section1: null,
    section2: null,
    section3: null,
    section4: null,
    section5: null,
    section6: null,
    section7: null,
  });

  // 섹션의 스크롤을 방지하고 스크롤 이벤트를 처리하는 함수
  const handleWheel = (e) => {
    if (isScrolling) return; // 스크롤이 진행 중이면 아무 작업도 하지 않음

    setIsScrolling(true); // 스크롤 진행 중 설정

    setTimeout(() => {
      if (e.deltaY > 0) {
        // 아래로 스크롤
        if (currentSection < totalSections - 1) {
          setCurrentSection((prev) => prev + 1);
        }
      } else {
        // 위로 스크롤
        if (currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        }
      }

      setIsScrolling(false); // 스크롤 끝나면 방지용 boolean 해제
    }, 200); // 0.2초 지연
  };

  useEffect(() => {
    // 현재 섹션으로 스크롤을 이동
    const sectionName = `section${currentSection + 1}`;
    if (sectionRefs.current[sectionName]) {
      sectionRefs.current[sectionName].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentSection]);

  return (
    <div
      style={{ height: "100vh", overflow: "hidden" }}
      onWheel={handleWheel}
    >
      {Array.from({ length: totalSections }, (_, index) => {
        const sectionName = `section${index + 1}`;
        return (
          <Section
            key={index}
            sectionName={sectionName}
            sectionRef={(el) => (sectionRefs.current[sectionName] = el)}
            index={index}
          />
        );
      })}
    </div>
  );
};

// 각 섹션을 컴포넌트로 정의
const Section = React.forwardRef(({ sectionName, sectionRef, index }, ref) => {
    return (
      <section
        ref={(el) => {
          sectionRef(el);  // sectionRef가 DOM을 추적하도록 전달
          if (ref) ref(el);  // 전달된 ref를 DOM에 연결
        }}
        // style={{
        //   height: "100vh",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   backgroundColor: index % 2 === 0 ? "lightblue" : "lightcoral",
        //   transition: "background-color 0.5s",
        // }}
      >
        <h2>{sectionName}</h2>
      </section>
    );
  });
  

export default ScrollSections;
