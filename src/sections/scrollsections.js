import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';

const sections = [
  { component: Section1, path: '/' },
  { component: Section2, path: '/about' },
  { component: Section3, path: '/awards' },
  { component: Section4, path: '/animation' },
  { component: Section5, path: '/pofol' },
  { component: Section6, path: '/skills' },
];

const ScrollSections = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  const sectionRefs = useRef(sections.map(() => React.createRef()));

  // URL 변경 → 섹션 이동
  useEffect(() => {
    const index = sections.findIndex((s) => s.path === location.pathname);
    if (index !== -1) {
      setCurrentSection(index);
    }
  }, [location.pathname]);

  // 섹션 변경 → 스크롤 + URL 동기화
  useEffect(() => {
    const ref = sectionRefs.current[currentSection];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      navigate(sections[currentSection].path, { replace: true });
    }
  }, [currentSection]);

  // 휠 스크롤 이벤트
  const handleWheel = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    setTimeout(() => {
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
      isScrolling.current = false;
    }, 200); // 디바운스 시간
  };

  return (
    <div onWheel={handleWheel}>
      {sections.map(({ component: Component }, index) => (
        <div key={index} ref={sectionRefs.current[index]} style={{ height: '100vh' }}>
          <Component />
        </div>
      ))}
    </div>
  );
};

export default ScrollSections;
