import React from 'react';
import NewComponent from "./NewComponent";

function NewContainer () {
    return (
        <div className="centered new_container">
            <NewComponent title="Title 1"
                          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, minima repellat rem odit sequi error magnam qui veniam, beatae voluptate modi saepe repudiandae, aliquid dolorum reprehenderit exercitationem eligendi distinctio laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, minima repellat rem odit sequi error magnam qui veniam, beatae voluptate modi saepe repudiandae, aliquid dolorum reprehenderit exercitationem eligendi distinctio laborum.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, minima repellat rem odit sequi error magnam qui veniam, beatae voluptate modi saepe repudiandae, aliquid dolorum reprehenderit exercitationem eligendi distinctio laborum."
            />
        </div>
    );
}

export default NewContainer;