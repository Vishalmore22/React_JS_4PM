import axios from "axios"; //axios can automatic convert to json.
import React, { useState } from "react";
import { useEffect } from "react";

const DisplayPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 9,
    page: 1,
  });
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/photos")
    // .then(response=>{
    //   setPhotos(response.data)
    // })
    // .catch(error=>{
    //   console.log("error fetching data",error);
    // });

    HandlerFetchPhotos();
  }, []);
  const HandlerFetchPhotos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setPhotos(res.data);
  };
  const handlePagination = (e) => {
    let page;
    if (e.target.value === "") {
      page = 1;
    } else {
      page = Number(e.target.value);
    }
    const start = (page - 1) * 10;
    const end = start + 9;
    setPagination({ ...pagination, start, end });
  };

  return (
    <>
      <div className="w-50 container mt-5 d-flex justify-content-center flex-direction-column">
        <div>
          <div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                Enter Page
              </span>
              <input
                onChange={handlePagination}
                type="text"
                className="form-control w-100"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          {photos.map((photo, i) => {
            if (i >= pagination.start && i <= pagination.end) {
              return (
                <div key={i} className="mt-3">
                  <p>
                    {i + 1} {photo.title}
                  </p>
                </div>
              );
            }
            return;
          })}
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              setPagination({
                ...pagination,
                start: pagination.start + 10,
                end: pagination.end + 10,
              });
            }}
          >
            Next++
          </button>
        </div>
      </div>
    </>
  );
};
export default DisplayPhotos;
