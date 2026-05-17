import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";

const TeacherPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/*LEFT*/}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalender />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3">
        <div className="w-full flex flex-col gap-8">
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
