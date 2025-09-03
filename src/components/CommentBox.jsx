import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, onSnapshot, serverTimestamp, orderBy, query } from "firebase/firestore";
import { toast } from "react-toastify";

const CommentBox = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    // LISTEN TO COMMENTS COLLECTION IN REAL-TIME
    useEffect(() => {
        const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        return unsubscribe;
    }, []);

    // console.log("comments", comments);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) return;

        try {
            await addDoc(collection(db, "comments"), {
                name,
                comment,
                timestamp: serverTimestamp(),
            });

            setName("");
            setComment("");

            // SUCCESS TOAST
            toast.success("Your comment has been posted!", {
                position: "top-right",
                autoClose: 2500,
                style: { backgroundColor: "#3DA7AF", color: "#FFF9F1", fontWeight: "bold" },
            });
        } catch (error) {
            // ERROR TOAST
            toast.error("Something went wrong. Please try again.", {
                position: "top-right",
                autoClose: 2500,
                style: { backgroundColor: "#FFFBEB", color: "#DC8059", fontWeight: "bold" },
            });
        }
    };

    return (
        <div className="p-6 bg-[#FFFBEB] rounded-xl shadow-md w-[85%] mx-auto my-4">

            <h2 className="text-2xl font-semibold md:text-left mt-4">Leave a Comment</h2>
            <p className="text-base md:text-left mb-6">Feel free to share your ideas! We are not going to publish them.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-2">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border px-2 py-3 rounded-lg focus:outline-none"
                />
                <textarea
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    className="border px-2 py-3 rounded-lg h-30 focus:outline-none"
                />
                <div className="flex items-center justify-end mt-6">
                    <button
                        type="submit"
                        className="bg-[#E17C55] text-white px-4 py-2 w-[25%] md:w-[20%] lg:w-[15%] rounded-lg hover:bg-[#b15e3e] transition cursor-pointer"
                    >
                        Post
                    </button>
                </div>

            </form>

            {/* COMMENT DISPLAY
      <div className="space-y-3 max-h-60 overflow-y-auto">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-sm">No comments yet.</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="border-b pb-2">
              <p className="font-semibold">{c.name}</p>
              <p className="text-gray-700">{c.comment}</p>
            </div>
          ))
        )}
      </div> */}

        </div>
    );
};

export default CommentBox;
