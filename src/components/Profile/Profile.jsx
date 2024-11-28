



import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlinePencil, HiOutlineMail, HiOutlineCalendar, HiOutlineChat, HiOutlineVideoCamera, HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { removeContactData } from "../../Service/Action/contactAction";
import { db } from '../../fierbase';

const Profile = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const docRef = doc(db, "Contact", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContact(docSnap.data());
        } else {
          setError("No such contact found!");
        }
      } catch (error) {
        setError("Error fetching contact.");
        console.error("Error fetching contact:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${contact.id}`, { state: { contact } });
  };

  const handleRemove = (id) => {
    dispatch(removeContactData(id));
    navigate('/');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 pt-8 max-w-full ml-[0px] mx-auto bg-white shadow-lg rounded-lg h-full">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate("/")} className="flex items-center">
          <HiOutlineArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-3">
          <button onClick={handleEdit}>
            <HiOutlinePencil size={24} />
          </button>
          <button onClick={() => handleRemove(contact.id)}>
            <HiOutlineTrash size={24} />
          </button>
          <button>
            <HiOutlineMail size={24} />
          </button>
          <button>
            <HiOutlineCalendar size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mb-6">
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png"
            alt="Profile"
            className="w-[161px] h-[161px] rounded-full"
          />
          <div className="flex justify-center items-center bg-[#C2E7FF] w-[48px] h-[48px] rounded-full absolute right-0 bottom-0 border-4 border-white">
            <HiOutlinePlus size={24} />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl text-[#1f1f1f] mb-3">
            {contact?.fname ? `${contact.fname} ${contact.lname}` : "No name available"}
          </h1>
          <div className="flex justify-center sm:justify-start">
            <p>{contact?.jobtitle ? contact.jobtitle : "No job title available"}</p>
            <p className="ml-2">{contact?.company ? contact.company : "No company"}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mb-6 justify-center sm:justify-start">
        <div className="text-center">
          <div className="bg-[#E4E4E4] h-[40px] w-[40px] rounded-full flex justify-center items-center mx-auto sm:mx-0">
            <HiOutlineMail size={24} />
          </div>
          <h6 className="text-[12px] pt-1">Email</h6>
        </div>
        <div className="text-center">
          <div className="bg-[#E4E4E4] h-[40px] w-[40px] rounded-full flex justify-center items-center mx-auto sm:mx-0">
            <HiOutlineCalendar size={24} />
          </div>
          <h6 className="text-[12px] pt-1">Phone</h6>
        </div>
        <div className="text-center">
          <div className="bg-[#E4E4E4] h-[40px] w-[40px] rounded-full flex justify-center items-center mx-auto sm:mx-0">
            <HiOutlineChat size={24} />
          </div>
          <h6 className="text-[12px] pt-1">Birthday</h6>
        </div>
        <div className="text-center">
          <div className="bg-[#E4E4E4] h-[40px] w-[40px] rounded-full flex justify-center items-center mx-auto sm:mx-0">
            <HiOutlineVideoCamera size={24} />
          </div>
          <h6 className="text-[12px] pt-1">Video</h6>
        </div>
      </div>

      <button className="rounded-[6px] border-[2px] border-black text-[12px] flex items-center gap-2 p-2">
        <HiOutlinePlus size={20} />
        Label
      </button>

      <div className="bg-[#F0F4F9] w-full sm:w-[520px] mt-6 p-4 rounded-xl mx-auto sm:mx-0">
        <h2 className="font-semibold text-[20px] mb-4">Contact details</h2>
        <div className="mb-2">
          <h3 className="font-bold flex items-center gap-4">
            <HiOutlineMail size={24} />
            {contact?.email || "No email available"}
          </h3>
        </div>
        <div className="mb-2">
          <h3 className="font-bold flex items-center gap-4">
            <HiOutlineCalendar size={24} />
            {contact?.phone || "No phone available"}
          </h3>
        </div>
        <div className="mb-2">
          <h3 className="font-bold flex items-center gap-4">
            <HiOutlineChat size={24} />
            {contact?.bday && contact?.bmonth && contact?.byear
              ? `${contact.bday}/${contact.bmonth}/${contact.byear}`
              : "No birthday available"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
