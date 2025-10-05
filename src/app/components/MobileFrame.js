// This component acts as the physical frame of a smartphone.
export default function MobileFrame({ children }) {
  return (
    // Outer container that centers the phone on the page.
    <div className="flex justify-center items-center min-h-screen">
      {/* The physical phone frame: black, rounded, with a slight shadow. */}
      {/* We're using specific pixel dimensions for a realistic phone size. */}
      <div className="w-[390px] h-[844px] bg-black rounded-[40px] shadow-2xl p-4">
        {/* The "screen" area where our app will live. */}
        {/* 'overflow-hidden' ensures nothing spills out of the rounded corners. */}
        <div className="w-full h-full bg-white rounded-[20px] overflow-hidden">
          {children}{" "}
          {/* This is where our ChatInterface component will be displayed. */}
        </div>
      </div>
    </div>
  );
}


