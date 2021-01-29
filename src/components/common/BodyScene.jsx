import React, {useState, useCallback} from "react";
import { Canvas } from "react-three-fiber";
import { useFrame } from "react-three-fiber";
import { OrbitControls, ContactShadows } from "drei";
import Fab from "@material-ui/core/Fab";
import { useDispatch, useSelector } from "react-redux";
import Body from "./Body";
import OptionSelector from "./OptionSelector";

export default function BodyScene(props) {
  const reducerProps = useSelector((state) => state);
  const dispatch = useDispatch();
  const [questionary, set] = useState(false);

  const handleCloseModal = () => {
    set(!questionary)
  }

  return (
    <div style={{ height: "60vh" }}>
      <Canvas concurrent pixelRatio={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.3}
          position={[5, 30, 30]}
          angle={0.1}
          penumbra={1}
        />
        <spotLight
          intensity={0.3}
          position={[-5, -30, -30]}
          angle={0.1}
          penumbra={1}
        />
        <Body dispatch={dispatch} />
        {/* <Environment files="hdr.hdr" /> */}
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.5, 0]}
          opacity={0.25}
          width={10}
          height={10}
          blur={2}
          far={1}
        />

        <OrbitControls
          enablePan={false}
        />
      </Canvas>
      <div
        class="float-right mr-2"
        style={{
          marginTop: "-100px",
          display:
            reducerProps.selectedBodyParts.length === 0 ? "none" : "block",
        }}

        onClick={()=> props.toggleQuestionary(true)}
      >
        <Fab variant="extended" color="secondary" aria-label="edit">
          <i className="fas fa-check fa-1x mr-3" />
          Fill Questionnaire
        </Fab>
        
      </div>
    </div>
  );
}
