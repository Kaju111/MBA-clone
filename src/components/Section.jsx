import React from "react";
import { motion } from "framer-motion"

const Section = ({
  h3,
  text,
  hasBtn = true,
  btnText,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {

  const headingOptions = {
    
    initial:{
      y:"-100%",
      opacity: 0
    },
    whileInView:{
      y:0,
      opacity: 1
    }
  }

  const textOptions = {
    ...headingOptions,
    Transition:{
      delay: 0.3,
    }
  }
  const btnOptions = {
    initial:{
      y:"100%",
      opacity: 0
    },
    whileInView:{
      y:0,
      opacity: 1
    },
    Transition:{
      delay: 0.3,
      easeIn : "easeIn"
    }
  }

  const imgOptions = {
    initial:{
      scale:0.1,
      opacity: 0
    },
    whileInView:{
      scale: 1,
      opacity: 1
    },
    Transition:{
      delay: 0.3,
    }
  }

  return (
    <section
      className="section"
      style={{
        backgroundColor,
      }}
    >
      <div>
        <motion.h3
          style={{
            color: headingColor,
          }}
          data-cursorpointer = {true}
          {...headingOptions}

        >
          {h3}
        </motion.h3>

        <motion.p
          style={{
            color: textColor,
          }}
          data-cursorpointer = "true"
          {...textOptions}
        >
          {text}
        </motion.p>

        {hasBtn && (
          <motion.button
            style={{
              color: btnColor,
              backgroundColor: btnBgColor,
            }}
            data-cursorpointer = "true"
            {...btnOptions}
          >
            {btnText}
          </motion.button>
        )}

        <motion.div {...imgOptions}>
          <img
            src={imgSrc}
            alt="imgSrc"
            style={{
              width: imgSize,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
