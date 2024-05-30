import { createPost } from "@/app/action/action";

export default function Form() {
  return (
    <form
      className="flex flex-col max-w-[400px] mx-auto my-10 gap-2"
      action={createPost}
    >
      <input
        type="text"
        name="title"
        placeholder="Title for new post"
        className="border-2 rounded px-3 h-10 "
        required
      />
      <textarea
        name="body"
        placeholder="Body for new post"
        className="border-2 rounded px-3 py-2"
        rows={6}
        required
      />
      <button className="h-10 bg-blue-500 px-5 rounded text-white">
        Submit
      </button>
    </form>
  );
}
