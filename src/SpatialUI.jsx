export const SpatialUI = () => {
  const data = [
    {
      img: "/vibesonly.png",
      title: "Good Vibes Only",
      subtitle: "Apple Music Dance",
    },
    {
      img: "/indieanthems.png",
      title: "Indie Anthems",
      subtitle: "Apple Music Indie",
    },
    {
      img: "/family.png",
      title: "Family Dance Party",
      subtitle: "Apple Music Family",
    },
    {
      img: "/formula.png",
      title: "La Formula",
      subtitle: "Apple Music Latin",
    },
    {
      img: "/gold.png",
      title: "Solid Gold Hits",
      subtitle: "Apple Music Pop",
    },
    {
      img: "/country.png",
      title: "Caffeine Country",
      subtitle: "Apple Music Country",
    },
    {
      img: "/melodic.png",
      title: "Melodic Rap",
      subtitle: "Apple Music Hip-Hop",
    },
    {
      img: "/viral.png",
      title: "Viral Remixed",
      subtitle: "Apple Music",
    },
  ];

  return (
    <div className="container">
      <div className="col left">
        <div className="row">
          <div className="text">
            <h1>Library</h1>
            <p>All Music</p>
          </div>
          <div className="option" data="ellipsis">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="18.2227"
              height="3.7207"
            >
              <g>
                <rect height="3.7207" opacity="0" width="18.2227" x="0" y="0" />
                <path
                  d="M16.3672 3.70117C17.3926 3.70117 18.2227 2.88086 18.2227 1.85547C18.2227 0.830078 17.3926 0 16.3672 0C15.3418 0 14.5117 0.830078 14.5117 1.85547C14.5117 2.88086 15.3418 3.70117 16.3672 3.70117Z"
                  fill="#ffffff"
                  fill-opacity="0.85"
                />
                <path
                  d="M9.11133 3.70117C10.1367 3.70117 10.957 2.88086 10.957 1.85547C10.957 0.830078 10.1367 0 9.11133 0C8.08594 0 7.25586 0.830078 7.25586 1.85547C7.25586 2.88086 8.08594 3.70117 9.11133 3.70117Z"
                  fill="#ffffff"
                  fill-opacity="0.85"
                />
                <path
                  d="M1.85547 3.70117C2.88086 3.70117 3.70117 2.88086 3.70117 1.85547C3.70117 0.830078 2.88086 0 1.85547 0C0.830078 0 0 0.830078 0 1.85547C0 2.88086 0.830078 3.70117 1.85547 3.70117Z"
                  fill="#ffffff"
                  fill-opacity="0.85"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="filters">
          <ul>
            <li>
              <div className="icon Clock">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="19.5919"
                  height="19.5986"
                >
                  <g>
                    <rect
                      height="19.5986"
                      opacity="0"
                      width="19.5919"
                      x="0"
                      y="0"
                    />
                    <path
                      d="M9.79443 19.5889C15.1649 19.5889 19.5919 15.1552 19.5919 9.79443C19.5919 4.42695 15.1582 0 9.7877 0C4.42695 0 0 4.42695 0 9.79443C0 15.1552 4.43369 19.5889 9.79443 19.5889ZM9.79443 18.3223C5.07002 18.3223 1.27334 14.5188 1.27334 9.79443C1.27334 5.07002 5.06328 1.26358 9.7877 1.26358C14.5121 1.26358 18.3253 5.07002 18.3253 9.79443C18.3253 14.5188 14.5188 18.3223 9.79443 18.3223Z"
                      fill="#ffffff"
                      fill-opacity="0.85"
                    />
                    <path
                      d="M4.48721 10.7522L9.7877 10.7522C10.0898 10.7522 10.329 10.5229 10.329 10.214L10.329 3.36856C10.329 3.06944 10.0898 2.84307 9.7877 2.84307C9.49463 2.84307 9.26221 3.06944 9.26221 3.36856L9.26221 9.68848L4.48721 9.68848C4.17832 9.68848 3.95195 9.91787 3.95195 10.214C3.95195 10.5229 4.17832 10.7522 4.48721 10.7522Z"
                      fill="#ffffff"
                      fill-opacity="0.85"
                    />
                  </g>
                </svg>
              </div>
              <p>Recently added</p>
            </li>
            <li>
              <div className="icon Mic">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="19.2152"
                  height="20.379"
                >
                  <g>
                    <rect
                      height="20.379"
                      opacity="0"
                      width="19.2152"
                      x="0"
                      y="0"
                    />
                    <path
                      d="M9.80333 19.7051C10.2439 19.7051 10.58 19.366 10.58 18.9382L10.58 11.6376L13.5423 8.906C14.6768 9.08276 15.8971 8.59652 17.0072 7.4894L11.7209 2.19633C10.601 3.30951 10.1713 4.47699 10.3639 5.61518L1.27579 15.4118C0.913782 15.8061 0.903626 16.3022 1.38986 16.7733L0.0611455 18.4209C-0.0257688 18.5378-0.0264525 18.6989 0.100892 18.8262L0.384095 19.1192C0.510755 19.2458 0.668764 19.2526 0.802162 19.1492L2.44982 17.8077C2.8923 18.2969 3.40724 18.2898 3.79181 17.9247L9.02667 13.0859L9.02667 18.9382C9.02667 19.366 9.36583 19.7051 9.80333 19.7051ZM1.99709 16.1036L10.7799 6.75405C10.952 7.09477 11.1776 7.41899 11.461 7.7432C11.7439 8.05092 12.0657 8.30883 12.3802 8.48022L3.11349 17.223ZM12.5522 1.36742L17.8392 6.65443C19.6064 4.90678 19.6717 2.79867 18.0334 1.17016C16.4019-0.441855 14.3072-0.399765 12.5522 1.36742Z"
                      fill="#ffffff"
                      fill-opacity="0.85"
                    />
                  </g>
                </svg>
              </div>
              <p>Artists</p>
            </li>
            <li>
              <div className="icon SquareStack">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="20.0434"
                  height="25.2428"
                >
                  <g>
                    <rect
                      height="25.2428"
                      opacity="0"
                      width="20.0434"
                      x="0"
                      y="0"
                    />
                    <path
                      d="M6.8543 11.2672L13.1891 11.2672C13.9038 11.2672 14.342 10.8455 14.342 10.1375L14.342 2.82139C14.342 2.11641 13.9038 1.6917 13.1891 1.6917L6.8543 1.6917C6.13955 1.6917 5.70137 2.11641 5.70137 2.82139L5.70137 10.1375C5.70137 10.8455 6.13955 11.2672 6.8543 11.2672Z"
                      fill="#ffffff"
                      fill-opacity="0.85"
                    />
                    <path
                      d="M5.43652 19.0017L14.6136 19.0017C16.4601 19.0017 17.7091 17.7564 17.7091 15.9166L17.7091 5.76572C17.7091 3.92598 16.4601 2.6874 14.6136 2.6874L5.43652 2.6874C3.59004 2.6874 2.33125 3.92598 2.33125 5.76572L2.33125 15.9166C2.33125 17.7564 3.59004 19.0017 5.43652 19.0017Z"
                      fill="#1e1e1e"
                    />
                    <path
                      d="M5.1959 17.5736L14.8542 17.5736C15.7606 17.5736 16.2841 17.0502 16.2841 16.1542L16.2841 5.5251C16.2841 4.6291 15.7606 4.1124 14.8542 4.1124L5.1959 4.1124C4.28945 4.1124 3.75928 4.6291 3.75928 5.5251L3.75928 16.1542C3.75928 17.0502 4.28945 17.5736 5.1959 17.5736Z"
                      fill="#ffffff"
                      fill-opacity="0.85"
                    />
                    <path
                      d="M4.55391 25.2428L15.4895 25.2428C18.3209 25.2428 20.0434 23.5247 20.0434 20.7128L20.0434 9.72637C20.0434 6.91446 18.3209 5.19942 15.4895 5.19942L4.55391 5.19942C1.72246 5.19942 0 6.90166 0 9.72637L0 20.7128C0 23.5338 1.72246 25.2428 4.55391 25.2428Z"
                      fill="#1e1e1e"
                    />
                    <path
                      d="M4.55391 23.5676L15.4895 23.5676C17.3973 23.5676 18.3712 22.5943 18.3712 20.7128L18.3712 9.72637C18.3712 7.84785 17.3973 6.87158 15.4895 6.87158L4.55391 6.87158C2.64609 6.87158 1.67217 7.83203 1.67217 9.72637L1.67217 20.7128C1.67217 22.6004 2.64609 23.5676 4.55391 23.5676ZM4.58018 22.3616C3.47949 22.3616 2.88115 21.7768 2.88115 20.6461L2.88115 9.78633C2.88115 8.66543 3.47949 8.08057 4.58018 8.08057L15.4669 8.08057C16.539 8.08057 17.1622 8.66543 17.1622 9.78633L17.1622 20.6461C17.1622 21.7768 16.539 22.3616 15.4669 22.3616Z"
                      fill="#ffffff"
                      fill-opacity="0.85"
                    />
                  </g>
                </svg>
              </div>
              <p>Albums</p>
            </li>
            <li>
              <div className="icon Songs">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="11.4781"
                  height="19.6688"
                >
                  <g>
                    <rect
                      height="19.6688"
                      opacity="0"
                      width="11.4781"
                      x="0"
                      y="0"
                    />
                    <path
                      d="M11.4781 4.78057L11.4781 1.20557C11.4781 0.733398 11.1006 0.43164 10.6449 0.523242L5.83125 1.56553C5.28193 1.68711 4.98555 1.99258 4.98555 2.48193L5.02021 13.1839C5.05088 13.7048 4.79297 14.0566 4.32393 14.1536L2.77725 14.4759C0.89375 14.8679 0 15.8095 0 17.2417C0 18.6723 1.09482 19.6688 2.6584 19.6688C4.06367 19.6688 6.12432 18.6564 6.12432 15.8934L6.12432 7.10313C6.12432 6.54619 6.24922 6.39942 6.75967 6.28662L10.9985 5.3585C11.2973 5.29619 11.4781 5.07559 11.4781 4.78057Z"
                      fill="#ffffff"
                      fill-opacity="0.85"
                    />
                  </g>
                </svg>
              </div>
              <p>Songs</p>
            </li>
            <li>
              <div className="icon Person crop">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="17.6818"
                  height="17.7074"
                >
                  <g>
                    <rect
                      height="17.7074"
                      opacity="0"
                      width="17.6818"
                      x="0"
                      y="0"
                    />
                    <path
                      d="M2.87871 17.7074L14.8001 17.7074C16.7147 17.7074 17.6818 16.7312 17.6818 14.8526L17.6818 2.88037C17.6818 1.00186 16.7147 0.0255859 14.8001 0.0255859L2.87871 0.0255859C0.973926 0.0255859 0 0.986035 0 2.88037L0 14.8526C0 16.747 0.973926 17.7074 2.87871 17.7074ZM2.90127 16.4984C1.80059 16.4984 1.20899 15.9203 1.20899 14.7927L1.20899 2.94033C1.20899 1.8127 1.80059 1.23457 2.90127 1.23457L14.7806 1.23457C15.8594 1.23457 16.4729 1.8127 16.4729 2.94033L16.4729 14.7927C16.4729 15.9203 15.8594 16.4984 14.7806 16.4984ZM2.09678 16.8809L15.6076 16.8809C15.1435 14.1791 12.2957 12.0083 8.85557 12.0083C5.40869 12.0083 2.56397 14.1791 2.09678 16.8809ZM8.8458 10.3926C10.6898 10.4061 12.1523 8.83848 12.1523 6.77285C12.1523 4.82813 10.6898 3.2252 8.8458 3.2252C6.99873 3.2252 5.53252 4.82813 5.53926 6.77285C5.546 8.83848 6.99873 10.3791 8.8458 10.3926Z"
                      fill="#ffffff"
                      fill-opacity="0.85"
                    />
                  </g>
                </svg>
              </div>
              <p>Made For You</p>
            </li>
          </ul>
        </div>

        <div className="row">
          <h1>Playlists</h1>
          <div className="icon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16.2787"
              height="9.81915"
            >
              <g>
                <rect
                  height="9.81915"
                  opacity="0"
                  width="16.2787"
                  x="0"
                  y="0"
                />
                <path
                  d="M8.14121 9.81915C8.33994 9.81915 8.52959 9.73057 8.66836 9.57832L16.0726 1.77969C16.1992 1.64698 16.2787 1.49268 16.2787 1.30606C16.2787 0.925393 15.9887 0.628615 15.605 0.628615C15.4244 0.628615 15.2513 0.699025 15.1246 0.818948L7.71074 8.61377L8.571 8.61377L1.15108 0.818948C1.03418 0.699025 0.861037 0.628615 0.670705 0.628615C0.29004 0.628615 0 0.925393 0 1.30606C0 1.49268 0.0825197 1.65303 0.20918 1.78946L7.60733 9.58135C7.75957 9.7336 7.93272 9.81915 8.14121 9.81915Z"
                  fill="#ffffff"
                  fill-opacity="0.85"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="playlists">
          <div className="filters">
            <ul>
              <li>
                <div className="icon grid">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="19.1141"
                    height="18.5385"
                  >
                    <g>
                      <rect
                        height="18.5385"
                        opacity="0"
                        width="19.1141"
                        x="0"
                        y="0"
                      />
                      <path
                        d="M15.2543 18.5357L17.5669 18.5357C18.5496 18.5357 19.1141 17.9955 19.1141 16.9616L19.1141 14.6999C19.1141 13.666 18.5496 13.1258 17.5669 13.1258L15.2543 13.1258C14.2716 13.1258 13.7071 13.666 13.7071 14.6999L13.7071 16.9616C13.7071 17.9955 14.2716 18.5357 15.2543 18.5357ZM15.3854 17.4757C14.9581 17.4757 14.7574 17.275 14.7574 16.844L14.7574 14.8175C14.7574 14.3768 14.9581 14.1791 15.3854 14.1791L17.4358 14.1791C17.8563 14.1791 18.057 14.3768 18.057 14.8175L18.057 16.844C18.057 17.275 17.8563 17.4757 17.4358 17.4757Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                      <path
                        d="M8.39248 18.5357L10.7148 18.5357C11.6976 18.5357 12.2553 17.9955 12.2553 16.9616L12.2553 14.6999C12.2553 13.666 11.6976 13.1258 10.7148 13.1258L8.39248 13.1258C7.41279 13.1258 6.85205 13.666 6.85205 14.6999L6.85205 16.9616C6.85205 17.9955 7.41279 18.5357 8.39248 18.5357ZM8.52656 17.4757C8.09932 17.4757 7.90537 17.275 7.90537 16.844L7.90537 14.8175C7.90537 14.3768 8.09932 14.1791 8.52656 14.1791L10.5838 14.1791C11.0043 14.1791 11.202 14.3768 11.202 14.8175L11.202 16.844C11.202 17.275 11.0043 17.4757 10.5838 17.4757Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                      <path
                        d="M1.54717 18.5357L3.86279 18.5357C4.84248 18.5357 5.40996 17.9955 5.40996 16.9616L5.40996 14.6999C5.40996 13.666 4.84248 13.1258 3.86279 13.1258L1.54717 13.1258C0.564454 13.1258 0 13.666 0 14.6999L0 16.9616C0 17.9955 0.564454 18.5357 1.54717 18.5357ZM1.67822 17.4757C1.25098 17.4757 1.06006 17.275 1.06006 16.844L1.06006 14.8175C1.06006 14.3768 1.25098 14.1791 1.67822 14.1791L3.73174 14.1791C4.15224 14.1791 4.35664 14.3768 4.35664 14.8175L4.35664 16.844C4.35664 17.275 4.15224 17.4757 3.73174 17.4757Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                      <path
                        d="M15.2543 11.9729L17.5669 11.9729C18.5496 11.9729 19.1141 11.4394 19.1141 10.4055L19.1141 8.13701C19.1141 7.10313 18.5496 6.56289 17.5669 6.56289L15.2543 6.56289C14.2716 6.56289 13.7071 7.10313 13.7071 8.13701L13.7071 10.4055C13.7071 11.4394 14.2716 11.9729 15.2543 11.9729ZM15.3854 10.9195C14.9581 10.9195 14.7574 10.7188 14.7574 10.2812L14.7574 8.24785C14.7574 7.81387 14.9581 7.61621 15.3854 7.61621L17.4358 7.61621C17.8563 7.61621 18.057 7.81387 18.057 8.24785L18.057 10.2812C18.057 10.7188 17.8563 10.9195 17.4358 10.9195Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                      <path
                        d="M8.39248 11.9729L10.7148 11.9729C11.6976 11.9729 12.2553 11.4394 12.2553 10.4055L12.2553 8.13701C12.2553 7.10313 11.6976 6.56289 10.7148 6.56289L8.39248 6.56289C7.41279 6.56289 6.85205 7.10313 6.85205 8.13701L6.85205 10.4055C6.85205 11.4394 7.41279 11.9729 8.39248 11.9729ZM8.52656 10.9195C8.09932 10.9195 7.90537 10.7188 7.90537 10.2812L7.90537 8.24785C7.90537 7.81387 8.09932 7.61621 8.52656 7.61621L10.5838 7.61621C11.0043 7.61621 11.202 7.81387 11.202 8.24785L11.202 10.2812C11.202 10.7188 11.0043 10.9195 10.5838 10.9195Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                      <path
                        d="M1.54717 11.9729L3.86279 11.9729C4.84248 11.9729 5.40996 11.4394 5.40996 10.4055L5.40996 8.13701C5.40996 7.10313 4.84248 6.56289 3.86279 6.56289L1.54717 6.56289C0.564454 6.56289 0 7.10313 0 8.13701L0 10.4055C0 11.4394 0.564454 11.9729 1.54717 11.9729ZM1.67822 10.9195C1.25098 10.9195 1.06006 10.7188 1.06006 10.2812L1.06006 8.24785C1.06006 7.81387 1.25098 7.61621 1.67822 7.61621L3.73174 7.61621C4.15224 7.61621 4.35664 7.81387 4.35664 8.24785L4.35664 10.2812C4.35664 10.7188 4.15224 10.9195 3.73174 10.9195Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                      <path
                        d="M15.2543 5.40693L17.5669 5.40693C18.5496 5.40693 19.1141 4.86973 19.1141 3.83584L19.1141 1.57109C19.1141 0.540235 18.5496 0 17.5669 0L15.2543 0C14.2716 0 13.7071 0.540235 13.7071 1.57109L13.7071 3.83584C13.7071 4.86973 14.2716 5.40693 15.2543 5.40693ZM15.3854 4.35664C14.9581 4.35664 14.7574 4.15596 14.7574 3.71826L14.7574 1.6917C14.7574 1.25772 14.9581 1.06006 15.3854 1.06006L17.4358 1.06006C17.8563 1.06006 18.057 1.25772 18.057 1.6917L18.057 3.71826C18.057 4.15596 17.8563 4.35664 17.4358 4.35664Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                      <path
                        d="M8.39248 5.40693L10.7148 5.40693C11.6976 5.40693 12.2553 4.86973 12.2553 3.83584L12.2553 1.57109C12.2553 0.540235 11.6976 0 10.7148 0L8.39248 0C7.41279 0 6.85205 0.540235 6.85205 1.57109L6.85205 3.83584C6.85205 4.86973 7.41279 5.40693 8.39248 5.40693ZM8.52656 4.35664C8.09932 4.35664 7.90537 4.15596 7.90537 3.71826L7.90537 1.6917C7.90537 1.25772 8.09932 1.06006 8.52656 1.06006L10.5838 1.06006C11.0043 1.06006 11.202 1.25772 11.202 1.6917L11.202 3.71826C11.202 4.15596 11.0043 4.35664 10.5838 4.35664Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                      <path
                        d="M1.54717 5.40693L3.86279 5.40693C4.84248 5.40693 5.40996 4.86973 5.40996 3.83584L5.40996 1.57109C5.40996 0.540235 4.84248 0 3.86279 0L1.54717 0C0.564454 0 0 0.540235 0 1.57109L0 3.83584C0 4.86973 0.564454 5.40693 1.54717 5.40693ZM1.67822 4.35664C1.25098 4.35664 1.06006 4.15596 1.06006 3.71826L1.06006 1.6917C1.06006 1.25772 1.25098 1.06006 1.67822 1.06006L3.73174 1.06006C4.15224 1.06006 4.35664 1.25772 4.35664 1.6917L4.35664 3.71826C4.35664 4.15596 4.15224 4.35664 3.73174 4.35664Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                    </g>
                  </svg>
                </div>
                <p>All Playlists</p>
              </li>
              <li>
                <div className="icon vibes">
                  <img src="/vibes.png" />
                </div>
                <p>Good Vibes Only</p>
              </li>
              <li>
                <div className="icon indie">
                  <img src="/indie.png" />
                </div>
                <p>Indie Anthems</p>
              </li>
              <li>
                <div className="icon plus">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="15.8227"
                    height="15.8324"
                  >
                    <g>
                      <rect
                        height="15.8324"
                        opacity="0"
                        width="15.8227"
                        x="0"
                        y="0"
                      />
                      <path
                        d="M0 7.91133C0 8.27481 0.303516 8.56856 0.657228 8.56856L7.2541 8.56856L7.2541 15.1624C7.2541 15.5191 7.54785 15.8227 7.91133 15.8227C8.27481 15.8227 8.5753 15.5191 8.5753 15.1624L8.5753 8.56856L15.1624 8.56856C15.5191 8.56856 15.8227 8.27481 15.8227 7.91133C15.8227 7.54785 15.5191 7.24434 15.1624 7.24434L8.5753 7.24434L8.5753 0.657228C8.5753 0.303516 8.27481 0 7.91133 0C7.54785 0 7.2541 0.303516 7.2541 0.657228L7.2541 7.24434L0.657228 7.24434C0.303516 7.24434 0 7.54785 0 7.91133Z"
                        fill="#ffffff"
                        fill-opacity="0.85"
                      />
                    </g>
                  </svg>
                </div>
                <p>Add Playlist</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col right">
        <div className="row">
          <div className="text">
            <h1>Playlists</h1>
            <p>254 Playlists</p>
          </div>
          <div className="option" data="ellipsis">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="19.5318"
              height="11.0873"
            >
              <g>
                <rect
                  height="11.0873"
                  opacity="0"
                  width="19.5318"
                  x="0"
                  y="0"
                />
                <path
                  d="M4.97695 11.0678L14.5886 11.0678C14.9251 11.0678 15.1949 10.8047 15.1949 10.4682C15.1949 10.1316 14.9251 9.86182 14.5886 9.86182L4.97695 9.86182C4.64043 9.86182 4.37734 10.1316 4.37734 10.4682C4.37734 10.8047 4.64043 11.0678 4.97695 11.0678Z"
                  fill="#ffffff"
                  fill-opacity="0.85"
                />
                <path
                  d="M2.8085 6.13838L16.7638 6.13838C17.1003 6.13838 17.3634 5.8753 17.3634 5.53877C17.3634 5.20225 17.1003 4.93242 16.7638 4.93242L2.8085 4.93242C2.47197 4.93242 2.20215 5.20225 2.20215 5.53877C2.20215 5.8753 2.47197 6.13838 2.8085 6.13838Z"
                  fill="#ffffff"
                  fill-opacity="0.85"
                />
                <path
                  d="M0.599611 1.20899L18.9322 1.20899C19.2688 1.20899 19.5318 0.945901 19.5318 0.609376C19.5318 0.272852 19.2688 0 18.9322 0L0.599611 0C0.263087 0 0 0.272852 0 0.609376C0 0.945901 0.263087 1.20899 0.599611 1.20899Z"
                  fill="#ffffff"
                  fill-opacity="0.85"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="inputContainer">
          <input type="text" placeholder="Search in Albums" />
        </div>

        <div className="grid">
          {data.map((item) => (
            <div className="item">
              <div className="image">
                <img src={item.img} />
              </div>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
          {data.map((item) => (
            <div className="item">
              <div className="image">
                <img src={item.img} />
              </div>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
          {data.map((item) => (
            <div className="item">
              <div className="image">
                <img src={item.img} />
              </div>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
