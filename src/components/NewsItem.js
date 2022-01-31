import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, author, time, source } = this.props;
    return (
      <div>
        <div className="card my-2">
          <div>
            <span
              className=" badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(time).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
