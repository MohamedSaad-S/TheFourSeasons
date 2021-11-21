import React, { useState, useEffect } from "react";
import Cliploader from "react-spinners/ClipLoader";

function loading() {
    
}

const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])
    
    {loading ?
      <Cliploader
        size={150}
        color={"#123abc"}
        loading={loading}
      />
      :

    }