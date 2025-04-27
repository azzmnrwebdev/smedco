import "./Main.css";
import React, { useEffect, useState } from "react";
import ScreenImage from "../assets/images/screen.png";
import BattreyImage from "../assets/images/battery.png";
import SoftwareImage from "../assets/images/software.png";
import HardwareImage from "../assets/images/hardware.png";
import ConnectivityImage from "../assets/images/connectivity.png";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";

const cardData = [
  {
    image: ScreenImage,
    title: "Screen Issues",
    description:
      "Cracked or broken screens are common laptop problems, offten requiring replacement.",
    long_description:
      "<p>A cracked or broken laptop screen is one of the most common issues experienced by users. This condition can occur due to various factors, such as dropping the laptop, pressure from being sat on, or excessive force applied to the screen surface. In addition to disrupting the visual display, screen damage can also affect performance and user comfort when operating the device.</p><p>In many cases, a cracked or broken screen cannot be repaired and needs to be replaced with a new one. Screen replacement should ideally be carried out by a professional technician to ensure compatibility and the quality of the repair. With proper handling, your laptop can function normally again as it did before.</p>",
  },
  {
    image: BattreyImage,
    title: "Battery Issues",
    description:
      "Laptop batteries lose capacity over time, needing replacement or repair to restore function.",
    long_description:
      "<p>Over time, a laptop battery will naturally experience a decline in capacity. This is a normal process that occurs in all types of lithium-ion batteries commonly used in electronic devices. This decrease in capacity can lead to shorter battery life, and in some cases, the battery may drain quickly even after a full charge.</p><p>To restore the laptop’s performance to optimal condition, users may need to replace or repair the battery. Replacing the battery with a new and compatible one can be an effective solution to ensure longer and more stable usage time. It is recommended to carry out battery replacement at an authorized service center or with a trusted technician to ensure safety and quality.</p>",
  },
  {
    image: SoftwareImage,
    title: "Software Errors",
    description:
      "Software glitches can cause various problems, requiring troubleshooting or reinsntalling the operating system.",
    long_description:
      '<p>Software malfunctions or "glitches" on a laptop can cause various issues that affect the overall system performance. These issues may appear in the form of unresponsive applications, slow system performance, or unpredictable display errors. The main causes of software glitches can vary, ranging from bugs in applications, system configuration errors, to conflicts between hardware and software.</p><p>To address these issues, users typically need to go through a troubleshooting process, such as checking for software updates, uninstalling problematic applications, or fixing incorrect system settings. In more severe cases, software issues may require users to reinstall the operating system. This process can restore the laptop to its original state and resolve more complex glitches.</p><p>Regular maintenance of the laptop\'s software is crucial to prevent similar issues in the future and ensure that your laptop operates optimally.</p>',
  },
  {
    image: HardwareImage,
    title: "Hardware Faults",
    description:
      "Demaged or mailfunctioning components like RAM, hard drives, or motherboard require replacement or repair.",
    long_description:
      "<p>Damage or malfunction in essential components of a laptop, such as the RAM, hard drive, or motherboard, can affect the overall performance of the device. These components play a crucial role in data processing and information storage. If any of these components is damaged, users may experience disruptions in laptop usage, ranging from slow performance to the device failing to power on at all.</p><p>In such cases, the damaged components often require replacement or repair by an experienced technician. Proper replacement or repair will ensure that the laptop functions optimally again and can be used for everyday tasks. It is advisable to ensure the use of high-quality replacement components that match the device's specifications to prevent future issues.</p>",
  },
  {
    image: ConnectivityImage,
    title: "Connectivity Issues",
    description:
      "Problems with Wi-Fi, Bluetooth, or other connections require troubleshooting and potentiality hardware replacement.",
    long_description:
      "<p>Issues related to Wi-Fi, Bluetooth, or other hardware connections are often obstacles that disrupt the user experience when using a laptop or other electronic devices. Common problems that may occur include difficulties in connecting devices to a Wi-Fi network, Bluetooth signal interference, or inability to connect to other external devices.</p><p>The causes of these issues can vary, ranging from incorrect settings, incompatible drivers, to physical damage to the Wi-Fi or Bluetooth module. To address these issues, the first step is to troubleshoot, which may include checking device settings, updating drivers, or testing connections with other devices.</p><p>If troubleshooting does not resolve the issue, it is possible that hardware components, such as the Wi-Fi card or Bluetooth module, need to be replaced. Hardware replacement should be carried out by an experienced technician to ensure proper repair and to make sure the device functions optimally again.</p>",
  },
];

const Loading = () => {
  return (
    <>
      <style>{`
        .loading-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
          opacity: 1 !important;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          background-color: rgba(0, 0, 0, 0.5);
        }
        .loader {
          width: 50px;
          aspect-ratio: 1;
          display:grid;
          -webkit-mask: conic-gradient(from 15deg,#0000,#000);
          animation: l26 1s infinite steps(12);
        }
        .loader,
        .loader:before,
        .loader:after{
          background:
            radial-gradient(closest-side at 50% 12.5%, #e4e6ff 96%,#0000) 50% 0/20% 80% repeat-y,
            radial-gradient(closest-side at 12.5% 50%, #e4e6ff 96%,#0000) 0 50%/80% 20% repeat-x;
        }
        .loader:before,
        .loader:after {
          content: "";
          grid-area: 1/1;
          transform: rotate(30deg);
        }
        .loader:after {
          transform: rotate(60deg);
        }
        @keyframes l26 {
          100% {transform:rotate(1turn)}
        }
      `}</style>

      <div className="loading-wrapper">
        <div className="loader"></div>
      </div>
    </>
  );
};

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleShow = (item) => {
    setIsLoading(true);

    setTimeout(() => {
      setModalData(item);
      setShowModal(true);

      window.history.pushState({ modalOpen: true }, "");
      setIsLoading(false);
    }, 2000);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalData(null);

    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (showModal) {
        handleClose();
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [showModal]);

  return (
    <div className="py-5 main">
      <Container>
        <Row
          xs={1}
          sm={2}
          lg={3}
          className="justify-content-center g-4 px-md-4"
        >
          {cardData.map((item, idx) => (
            <Col key={idx}>
              <Card
                className="card-custom shadow-sm h-100"
                onClick={() => handleShow(item)}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="image"
                  alt={item.title}
                  loading="lazy"
                />
                <Card.Body className="p-4">
                  <Card.Title className="text-white title">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-secondary description">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Loading Overlay */}
      {isLoading && <Loading />}

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>{modalData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData && (
            <>
              <img
                src={modalData.image}
                alt={modalData.title}
                className="img-fluid rounded mb-3"
                loading="lazy"
              />
              {modalData.long_description ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: modalData.long_description,
                  }}
                />
              ) : (
                <p>{modalData.description}</p>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Main;
