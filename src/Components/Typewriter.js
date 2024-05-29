import { useEffect, useState } from "react";

function Typewriter({ text, typingSpeed = 100, erasingSpeed = 50, duration = 2000}) {
    const [displayText, setDisplayText] = useState("");
    const [isDeliting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const handleTyping = () => {
            if(!isDeliting){
                if(displayText.length < text[index].length){
                    setDisplayText((prev) => prev + text[index].charAt(displayText.length));
                }else{
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, duration);                    
                }
            }else{
                if(displayText.length > 0){
                    setDisplayText((prev) => prev.slice(0, -1));
                }else{
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(() => {
            handleTyping();
        }, isDeliting ? erasingSpeed : typingSpeed);

        return () => clearTimeout(timeout);  // harbar naya timeout create hoga to purana clear hoga
    },[displayText, isDeliting, index, text, typingSpeed, erasingSpeed, duration]);
  return (
    <div className="typing-effect">
        {displayText}
      {/* <span className="caret"></span> */}
    </div>
  );
}

export default Typewriter;