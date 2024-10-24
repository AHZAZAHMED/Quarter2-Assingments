import Link from "next/link";

export default function ContactPage(){
    return(
      <div className="min-h-screen bg-cyan-700 flex item-center justify-center">
        <div className="w-full  max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
          <form className="space-y-4"></form>
          <div>
            <label htmlFor="name" className=" block font-medium text-md text-gray-500">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name"className=" p-2 mt-1 block w-full border border-grey-300 rounded " />
          </div>
          <div>
            <label htmlFor="email" className=" mt-1 block font-medium text-md text-gray-500">Email</label>
            <input type="email" name="email" id="email" placeholder="your email"className="mt-1 p-2 block w-full border border-grey-300 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="mt-1 block font-medium text-md text-gray-500">Message</label>
            <textarea  name="message" id="message" rows={4}  placeholder="Write your message here ...." className="mt-1 p-2 block w-full border border-gray-300 rounded" />
          </div>

          <button
          type="submit"
          className="mt-1 p-2 w-full rounded text-white border border-white bg-blue-500 hover:text-blue-500 hover:bg-white hover:border-black transition ">
                Send Message
          </button>
        </div>

      </div>
       
    );
  }