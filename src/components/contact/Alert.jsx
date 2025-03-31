import React from "react";

const Alert = () => {
    return (
        <div className="py-2">
            <div className="container">
                <div className="border border-purple-500  flex max-w-[655px] items-center rounded-md border-l-[6px]  p-5 pl-6">
                    <div className=" mr-5 flex h-[36px] w-full max-w-[36px] items-center justify-center rounded-full">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_961_15629)">
                                <path
                                    d="M8.99998 0.506256C4.3031 0.506256 0.506226 4.30313 0.506226 9.00001C0.506226 13.6969 4.3031 17.5219 8.99998 17.5219C13.6969 17.5219 17.5219 13.6969 17.5219 9.00001C17.5219 4.30313 13.6969 0.506256 8.99998 0.506256ZM8.99998 16.2563C5.00623 16.2563 1.77185 12.9938 1.77185 9.00001C1.77185 5.00626 5.00623 1.77188 8.99998 1.77188C12.9937 1.77188 16.2562 5.03438 16.2562 9.02813C16.2562 12.9938 12.9937 16.2563 8.99998 16.2563Z"
                                    fill="#8a27ce"
                                />
                                <path
                                    d="M11.4187 6.38438L8.07183 9.64688L6.55308 8.15626C6.29996 7.90313 5.90621 7.93126 5.65308 8.15626C5.39996 8.40938 5.42808 8.80313 5.65308 9.05626L7.45308 10.8C7.62183 10.9688 7.84683 11.0531 8.07183 11.0531C8.29683 11.0531 8.52183 10.9688 8.69058 10.8L12.3187 7.31251C12.5718 7.05938 12.5718 6.66563 12.3187 6.41251C12.0656 6.15938 11.6718 6.15938 11.4187 6.38438Z"
                                    fill="#8a27ce"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_961_15629">
                                    <rect width="20" height="20" fill="#fff" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <h3 className="mb-1 text-md font-medium text-purple-700 ">
                                Email sent succesfully!
                            </h3>

                        </div>
                        <div>
                            <button className="duration-300 text-purple-700 hover:text-dark">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 10L18.625 2.375C18.9062 2.09375 18.9062 1.65625 18.625 1.375C18.3438 1.09375 17.9062 1.09375 17.625 1.375L10 9L2.375 1.375C2.09375 1.09375 1.65625 1.09375 1.375 1.375C1.09375 1.65625 1.09375 2.09375 1.375 2.375L9 10L1.375 17.625C1.09375 17.9062 1.09375 18.3438 1.375 18.625C1.5 18.75 1.6875 18.8438 1.875 18.8438C2.0625 18.8438 2.25 18.7812 2.375 18.625L10 11L17.625 18.625C17.75 18.75 17.9375 18.8438 18.125 18.8438C18.3125 18.8438 18.5 18.7812 18.625 18.625C18.9062 18.3438 18.9062 17.9062 18.625 17.625L11 10Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;