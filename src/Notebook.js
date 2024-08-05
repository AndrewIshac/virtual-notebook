import React, { useState } from 'react';
import './styles.css';

const Notebook = () => {
  const [pages, setPages] = useState([
    {
      leftContent: ['/pictures/carly1.jpg'],
      rightContent: (
        <>
          <h2 className="date-header">27 July 2024</h2>
          <p>This is the day where you made Jehovah, your Family, and us proud! Congratulations Carlos!<br></br> <br></br>~Andrew <br></br> <br></br>PS: When you were making a notebook for Chloe, I decided to make a virtual one for you <br></br>(Stole the idea sorry)</p>
        </>
      )
    },
    {
      leftContent: ['/pictures/video1.mp4'],
      rightContent: (
        <p>
          🎉CONGRATSSSS wajdiiii!🎉 Je suis vraiment fière de ta décision et j'espère que tu vas toujours rester dans la bonne voie et être heureuse dans ta vie. Je te souhaite que le meilleure pour toujours, jtm ❤️
          <br /><br />
          ~De Chris 🌟😊
        </p>
      )
    },
    {
      leftContent: ['/pictures/video2.mp4'],
      rightContent: (
        <>
          <p>Haboubti,
          Ya 2ahla khérié mchamsse bel kon,
          Mabrooooookkk💋🥳
          You took the best decision and I hope you know it and live by it❤
          Yahwa iberkak w n2eber dalak meche bel tari2 el sah😙 (ma ghre2et la machi)🙌🏼 Yaret ana ghara2tak tho😌
          Love😘 bass mou zyede🤚🏼
          <br></br><br></br>-Chloé ~ Haboubtik😝 <br></br>(El 2amar bi had zeto)</p>
        </>
      )
    },
    {
      leftContent: ['/pictures/video3.mp4'],
      rightContent: (
        <>
          <p>Carly hbb je suis contente de tes progrès keep going, je t’aime bcp petite soeur 😘❤
          <br></br> <br></br>~Natacha</p>
        </>
      )
    },
    {
      leftContent: ['/pictures/video4.mp4'],
      rightContent: (
        <>
          <p>Carlyyy, I'm proud of how you've grown into a beautiful person. Jehovah is proud too. Keep making him proud, habibi. Love you, snowman obsession and all! 🩷😂
          
          <br />~Tia
          <br /><br />Congrats boubou. You're thriving spiritually. Keep Jehovah close and you'll continue to flourish. This is a huge step. So proud of you hbb!
          <br />~Christina</p>
        </>
      )
    },
    {
      leftContent: ['/pictures/video5.mp4'],
      rightContent: (
        <>
          <p>Je t’aime Caroushh!! Tu es un example à nous tous. Continues comme ça habibi! 🩷
            <br></br><br></br> ~Melissa
          </p>
        </>
      )
    },
    {
      leftContent: ['/pictures/video6.mp4'],
      rightContent: (
        <>
          <p>Love you titiiii
          <br></br><br></br> ~Lamita
          </p>
        </>
      )
    },
    {
      leftContent: ['/pictures/video7.mp4'],
      rightContent: (
        <>
          <p>Bhebik ya hayati ktir w farehte kbire la2anik ekhde hal maw2af
          <br></br><br></br> ~Teta Emilie
          </p>
        </>
      )
    },
    {
      leftContent: ['/pictures/video8.mp4'],
      rightContent: (
        <>
          <p>Félicitations ya albe 3a hal khetwe l 7elwe li 3emltia. Je suis fière de toi, tu nous rends toujours fiers, et n'oublie pas que ton père sera toujours là pour toi. Je t'aime. <br></br><br></br> ~Papi</p>
        </>
      )
    },
    {
      leftContent: ['/pictures/video9.mp4'],
      rightContent: (
        <>
          <p>P7ebik ad l tawle, ad l piscine, p7ebik ad l sama wl ared, p7ebik ad ldene kela 💞
            <br></br><br></br> ~Mama
          </p>
        </>
      )
    },
    {
      leftContent: ['/pictures/video11.mp4'],
      rightContent: (
        <>
          <p>Mabrooooookkk💋🥳 <br></br>Love you ya helwe!
            <br></br><br></br> ~Asteer
          </p>
        </>
      )
    },

    //Start of pictures, end of videos.
    {
      leftContent: ['/pictures/rouda5.jpg'],
      rightContent: ['/pictures/VoiceRouda1.opus'],
      audioCaption: <p><br></br> ~Rouda</p> // Add this line for custom captions
    },
    
    {
      leftContent: ['/pictures/Rouda2.jpg'],
      rightContent: ['/pictures/VoiceRouda2.opus'],
      audioCaption: <p><br></br> ~Roro</p> // Add this line for custom captions
    },
    {
      leftContent: ['/pictures/grandpa1.jpg'],
      rightContent: (
        <>
          <p>He for sure would have been so proud of you and of the person you've become ❤️ <br></br>Keep walking in the truth🙏
          <br></br><br></br> ~Jedo Abboud 🌹</p>
        </>
      )
    },
    {
      rightContent: (
        <>
          <p className="bible-verse">
          "Vous tous, qui avez été baptisés en Christ, vous avez revêtu Christ."
            <br /><br />
            ~ Galates 3:27
            <br></br> <br></br> <br></br> "Cette eau était une figure du baptême, et qui maintenant vous sauve, vous aussi, par la résurrection de Jésus-Christ."
            <br></br><br></br> ~ 1 Pierre 3:21
          </p>
        </>
      ),
      leftContent: ['/pictures/video10.mp4'],
    },
    {
      leftContent: [
        '/pictures/image1.jpg', '/pictures/image2.jpg', '/pictures/image3.jpg',
        '/pictures/image4.jpg', '/pictures/image5.jpg', '/pictures/image1k.jpg',
        '/pictures/image7.jpg', '/pictures/image8.jpg', '/pictures/image9.jpg',
        '/pictures/image29.jpg', '/pictures/image26.jpg', '/pictures/image27.jpg',
        '/pictures/image28.jpg', '/pictures/image21.jpg', '/pictures/image22.jpg',
        '/pictures/image23.jpg', '/pictures/image24.jpg', '/pictures/image25.jpg',
        '/pictures/rouda1.jpg', '/pictures/image32.jpg'
        
      ],
      rightContent: (
        <div className="last-page-content">
          <img 
            src="/pictures/image6.jpg" 
            alt="Final Celebration" 
            className="final-image"
          />
          <p className="final-caption">MABROUK 🎊</p>
        </div>
      )
    },
  ]);

  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const toggleNotebook = () => {
    if (completed) {
      setCompleted(false);
      setOpen(false);
      setCurrentPage(0);
    } else {
      if (!open) {
        setCurrentPage(0);
      }
      setOpen(!open);
    }
  };

  const turnPage = (direction) => {
    setTurning(true);
    setTimeout(() => {
      if (direction === 'next') {
        if (currentPage === pages.length - 1) {
          setCompleted(true);
          setOpen(false);
        } else {
          setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
        }
      } else {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
      }
      setTurning(false);
    }, 500);
  };

  const closeNotebook = () => {
    setOpen(false);
    setCurrentPage(0);
  };

  const renderContent = (content, pageIndex) => {
    if (Array.isArray(content)) {
      if (content.length === 9) {
        // Special case for the 9-image grid
        return (
          <div className="image-grid last-page-content">
            {content.map((item, index) => (
              <img 
                key={`${pageIndex}-${index}`} 
                src={item} 
                alt={`Content ${index + 1}`} 
                className="grid-image" 
              />
            ))}
          </div>
        );
      }
      return content.map((item, index) => {
        if (item.endsWith('.mp4')) {
          return (
            <div key={`${pageIndex}-${index}-${currentPage}`} className="video-container">
              <video
                controls
                className="page-video"
                onLoadedMetadata={(e) => {
                  if (e.target.videoWidth < e.target.videoHeight) {
                    e.target.classList.add('vertical-video');
                  } else {
                    e.target.classList.add('horizontal-video');
                  }
                }}
              >
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          );
        } else if (item.endsWith('.opus')) {
          return (
            <div className="audio-container">
              <div className="audio-player">
                <audio key={`${pageIndex}-${index}-${currentPage}`} controls className="page-audio">
                  <source src={item} type="audio/ogg; codecs=opus" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              {pages[currentPage].audioCaption && (
                <p className="audio-caption">{pages[currentPage].audioCaption}</p>
              )}
            </div>
          );
        } else {
          return (
            <img 
              key={`${pageIndex}-${index}`} 
              src={item} 
              alt={`Content ${index + 1}`} 
              className={`page-image ${content.length === 1 ? 'large' : ''}`} 
            />
          );
        }
      });
    } else if (typeof content === 'string' || React.isValidElement(content)) {
      // Add a class to the last page's content
      if (pageIndex === pages.length - 1) {
        return <div className="last-page-content">{content}</div>;
      }
      return content;
    }
  };

  const updatePage = (index, newContent) => {
    setPages(prevPages => {
      const newPages = [...prevPages];
      newPages[index] = { ...newPages[index], ...newContent };
      return newPages;
    });
  };

  return (
    <div className="notebook-container">
      <div className={`notebook ${open ? 'open' : ''}`}>
        <div className={`cover ${open ? 'hidden' : ''}`} onClick={toggleNotebook}>
          <div className={`cover-design ${completed ? 'completed' : ''}`}>
            {completed ? (
               <>
               <h1>Made by Andrew</h1>
               <p>Special thanks to Christelle</p>
               <p className="completion-date">27 July 2024</p>
             </>
            ) : (
              <>
                <h1>Carly's Baptism</h1>
                <p>A special notebook for you from Andrew</p>
              </>
            )}
            <span className="tap-to-open">tap to {completed ? "reopen" : "open"}</span>
          </div>
        </div>
        <div className={`pages-container ${open ? 'visible' : ''} ${turning ? 'turning' : ''}`}>
        <div className="page page-left">
  <div className={`page-content ${currentPage === 0 || currentPage === 1 || pages[currentPage]?.leftContent.length === 1 ? 'single-content' : ''}`}>
    {renderContent(pages[currentPage]?.leftContent, currentPage)}
  </div>
</div>
<div className="page page-right">
  <div className="page-content">
    {renderContent(pages[currentPage]?.rightContent, currentPage)}
  </div>
</div>
          <div className="spine"></div>
        </div>
        {open && (
          <div className="nav">
            <button onClick={currentPage === 0 ? closeNotebook : () => turnPage('prev')} disabled={turning}>
              Previous
            </button>
            <button onClick={() => turnPage('next')} disabled={turning}>
              {currentPage >= pages.length - 1 ? 'Close Book' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notebook;