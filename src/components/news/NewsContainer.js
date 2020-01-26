import React from 'react';
import NewComponent from "./NewComponent";

const getComments = (newsIndex) => {
    const arrayComments = [];
    const isEven = !(newsIndex%2);
    for (let i = 0; i < (isEven ? 5 : 3); i++) {
        arrayComments.push({
            author: isEven ? `Ann${i}${i}${i}` : `John${i}${i}${i}`,
            commentText: `This new is ${isEven ? 'good' : 'bad'}.`,
            likes: isEven ? isEven*3 : isEven*5
        });
    }
    return arrayComments;
};

const getNews = () => {
    const arrayNews = [];
    for (let i = 0; i < 10; i++){
        arrayNews.push({
            title: `Title ${i}`,
            description: `${i} - Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatem, minima repellat rem odit sequi error magnam qui veniam, beatae 
            voluptate modi saepe repudiandae, aliquid dolorum reprehenderit exercitationem 
            eligendi distinctio laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatem, minima repellat rem odit sequi error magnam qui veniam, beatae voluptate 
            modi saepe repudiandae, aliquid dolorum reprehenderit exercitationem eligendi 
            distinctio laborum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, minima repellat 
            rem odit sequi error magnam qui veniam, beatae voluptate modi saepe repudiandae, 
            aliquid dolorum reprehenderit exercitationem eligendi distinctio laborum.`,
            comments: getComments(i)
        });
    }
    return arrayNews;
};

function NewContainer () {
    const currentArray = getNews();
    console.log(currentArray);
    return (
        <div className="centered new_container">
            {currentArray.map(item => (
                <NewComponent key = {item.title}
                              newsInfo = {item}
                />
            ))}
        </div>
    );
}

export default NewContainer;