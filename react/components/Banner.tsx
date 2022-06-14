import React, { ReactNode } from 'react';
import {useCssHandles} from 'vtex.css-handles';

type Props ={
  children?:[ReactNode,ReactNode]
}

const Banner = ({ children }:Props) => {

  const CSS_HANDLES=["countdown_banner"]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.countdown_banner} flex`}>
      {children}
    </div>
  );
};

export default Banner;
