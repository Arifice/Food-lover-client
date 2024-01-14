/* eslint-disable react/prop-types */

const TeamCard = ({team}) => {
    const {name,img,email,description}=team;
    return (
        <div className="card lg:rounded-full rounded bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className="rounded-xl h-64" src={img} alt="Shoes"  />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p className="font-semibold">Email : {email}</p>
                <p className="text-justify text-sm text-success">{description.slice(0,100)}</p>
                <div className="card-actions">
                <button className="btn btn-ghost btn-outline my-6" onClick={()=>document.getElementById(`${email}`).showModal()}>Details</button>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                    
                    <dialog id={email} className="modal">
                        <div className="modal-box">
                            <figure><img src={img} alt="" /></figure>
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg mt-6">{name}</h3>
                                <p className="">{email}</p>
                                <p className="py-4 text-sm text-justify text-success">{description}</p>
                            </div>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-warning text-2xl">Close</button>
                            </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;