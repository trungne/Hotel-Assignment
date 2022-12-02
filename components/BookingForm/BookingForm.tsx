import { useCallback, useState } from "react";
import { Room, snakeToCamel } from "../../shared";
import TabElement, { TabContent } from "./Tab";
import { useCollection } from "react-firebase-hooks/firestore";
import { roomCollection } from "../../shared/fb";

const BookingForm = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const [value] = useCollection(roomCollection);
  const changeTab = useCallback((tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  }, []);
  return (
    <>
      <div id="booking" className="tabs flex justify-center">
        {value?.docs.map((doc, idx) => {
          const room = doc.data() as Room;
          return (
            <TabElement
              key={doc.id}
              tabIndex={idx}
              currentTabIndex={currentTabIndex}
              tabTitle={snakeToCamel(room.name)}
              onClick={changeTab}
            />
          );
        })}
      </div>
      {value?.docs.map((doc, idx) => {
        const room = doc.data() as Room;

        return (
          <TabContent
            key={doc.id}
            room={room}
            tabIndex={idx}
            currentTabIndex={currentTabIndex}
          />
        );
      })}
    </>
  );
};

export default BookingForm;
