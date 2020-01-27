import React from 'react';
import NewComponent from "./NewComponent";

const getComments = (newsIndex) => {
    const arrayComments = [];
    const isEven = !(newsIndex%2);
   
    for (let i = 0; i < (isEven ? 5 : 3); i++) {
        arrayComments.push({
            commentAuthor: isEven ? `Ann${i}${i+1}${i+2}` : `John${i}${i+1}${i+2}`,
            commentText: `This new is ${isEven ? 'good! Lorem ipsum dolor sit amet consectetur adipisicing elit' : 'bad! Voluptatem, minima repellat'}!`,
            likes: isEven ? i+3 : i+1
        });
    }
    return arrayComments;
};

const getNews = () => {
    const arrayNews = [];
    for (let i = 1; i < 6; i++){
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

function NewsContainer () {
    const currentArray = getNews();
    //console.log(currentArray);
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

export default NewsContainer;