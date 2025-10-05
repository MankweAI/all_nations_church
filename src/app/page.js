import ChatInterface from "./components/ChatInterface";
import MobileFrame from "./components/MobileFrame";

export default function Home() {
  return (
    <main>
      {/* Here, we are using the MobileFrame component and placing 
        the ChatInterface component *inside* of it.
      */}
      <MobileFrame>
        <ChatInterface />
      </MobileFrame>
    </main>
  );
}
