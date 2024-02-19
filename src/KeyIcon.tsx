export const KeyIcon = ({ fill }: { fill: number }) => {
  const height = 422;
  const percentFilled = (fill / 100) * height;

  console.log(percentFilled);
  return (
    <svg
      className="Mickey"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="-5 -5 127.877 115.89"
    >
      <mask id="myMask">
        <path
          fill="white"
          d="M17.111 100.307H27.13a10.43 10.43 0 0 0 1.2 3.587l.753 1.606H11.538v-2.606h-.026V58.897c-2.339.899-4.53.92-6.349.3a7.521 7.521 0 0 1-3.5-2.45c-.88-1.109-1.439-2.459-1.61-3.949-.26-2.31.43-4.919 2.4-7.37.1-.12.21-.24.34-.34L59.847.552c.74-.68 1.879-.75 2.699-.11l57.186 44.456c.09.07.169.14.249.23 2.65 2.85 3.31 6.009 2.67 8.679a8.07 8.07 0 0 1-1.819 3.479c-.87.98-1.98 1.74-3.24 2.189-2 .721-4.38.7-6.789-.439v41.27h.003v5.193H77.393l.344-1.285-.015-.004c.199-.745.313-1.509.342-2.274.277-.515.514-1.06.704-1.63h26.435V56.577c0-1.01-39.227-32.017-43.556-35.387-4.589 3.49-44.536 34.247-44.536 35.547v43.57zM93.753 3.552l17.169.7V27.44L93.753 16.111V3.552zM71.092 66.137a1.81 1.81 0 1 1-1.729-3.18c4.17-2.263 6.112-5.188 6.504-8.049.207-1.528-.03-3.062-.604-4.483a10.404 10.404 0 0 0-2.695-3.802c-2.292-2.049-5.508-3.127-8.866-2.292-1.362.337-2.54 1.019-3.571 1.978-1.096 1.019-2.043 2.352-2.873 3.927a1.813 1.813 0 0 1-2.446.764 1.815 1.815 0 0 1-.764-2.446c1.019-1.931 2.209-3.589 3.619-4.904 1.475-1.368 3.187-2.351 5.176-2.843 4.619-1.143 9.02.314 12.147 3.11a14.051 14.051 0 0 1 3.643 5.146c.799 1.972 1.125 4.14.823 6.337-.539 3.92-3.051 7.853-8.364 10.737zM57.198 80.452c-6.87-9.228-7.036-17.97 1.303-26.095l-6.005-3.317c-4.81-1.871-13.634 11.923-10.223 15.606l4.679 6.941-.965 2.014c-.267.599-.006 1.019.646 1.309l.634.172-9.868 21.784 2.464 5.254 4.928-1.451 1.267-2.464-1.214-2.274 2.677-.574.622-1.208-1.398-2.133.918-1.782 2.671-.338.871-1.688-1.492-1.948.953-1.848 2.725-.444 1.404-4.774.627.344c1.089.661 1.652.235 1.776-1.086zm12.929 5.786.49 4.461-2.517.995-.527 1.972 1.836 1.558-.479 1.795-2.487.876-.51 1.896 1.783 1.747-.344 1.285-2.446 1.108 1.635 1.925-.705 2.623-4.412 2.411-3.447-4.52 4.27-22.234-1.592-.426a.622.622 0 0 1-.438-.759l.669-2.493c-4.821-3.654-7.208-9.979-5.55-16.181 2.132-7.966 10.174-12.775 18.147-10.986.035.426.029.858-.03 1.291-.147 1.078-.615 2.186-1.48 3.258-.118.142-.243.29-.373.432a5.459 5.459 0 0 0-5.62 4.04 5.437 5.437 0 0 0 .118 3.216c.083.355.219.699.396 1.036a4.184 4.184 0 0 0 1.759 1.729 5.574 5.574 0 0 0 1.582.711 5.468 5.468 0 0 0 6.645-3.696 17.802 17.802 0 0 0 2.263-2.398c1.256-1.617 2.114-3.334 2.624-5.082a15.3 15.3 0 0 1 3.565 14.387c-1.658 6.201-6.9 10.489-12.894 11.241l-.67 2.493a.62.62 0 0 1-.758.438l-.503-.149z"
        />
      </mask>
      <path
        className="filling"
        d="M17.111 100.307H27.13a10.43 10.43 0 0 0 1.2 3.587l.753 1.606H11.538v-2.606h-.026V58.897c-2.339.899-4.53.92-6.349.3a7.521 7.521 0 0 1-3.5-2.45c-.88-1.109-1.439-2.459-1.61-3.949-.26-2.31.43-4.919 2.4-7.37.1-.12.21-.24.34-.34L59.847.552c.74-.68 1.879-.75 2.699-.11l57.186 44.456c.09.07.169.14.249.23 2.65 2.85 3.31 6.009 2.67 8.679a8.07 8.07 0 0 1-1.819 3.479c-.87.98-1.98 1.74-3.24 2.189-2 .721-4.38.7-6.789-.439v41.27h.003v5.193H77.393l.344-1.285-.015-.004c.199-.745.313-1.509.342-2.274.277-.515.514-1.06.704-1.63h26.435V56.577c0-1.01-39.227-32.017-43.556-35.387-4.589 3.49-44.536 34.247-44.536 35.547v43.57zM93.753 3.552l17.169.7V27.44L93.753 16.111V3.552zM71.092 66.137a1.81 1.81 0 1 1-1.729-3.18c4.17-2.263 6.112-5.188 6.504-8.049.207-1.528-.03-3.062-.604-4.483a10.404 10.404 0 0 0-2.695-3.802c-2.292-2.049-5.508-3.127-8.866-2.292-1.362.337-2.54 1.019-3.571 1.978-1.096 1.019-2.043 2.352-2.873 3.927a1.813 1.813 0 0 1-2.446.764 1.815 1.815 0 0 1-.764-2.446c1.019-1.931 2.209-3.589 3.619-4.904 1.475-1.368 3.187-2.351 5.176-2.843 4.619-1.143 9.02.314 12.147 3.11a14.051 14.051 0 0 1 3.643 5.146c.799 1.972 1.125 4.14.823 6.337-.539 3.92-3.051 7.853-8.364 10.737zM57.198 80.452c-6.87-9.228-7.036-17.97 1.303-26.095l-6.005-3.317c-4.81-1.871-13.634 11.923-10.223 15.606l4.679 6.941-.965 2.014c-.267.599-.006 1.019.646 1.309l.634.172-9.868 21.784 2.464 5.254 4.928-1.451 1.267-2.464-1.214-2.274 2.677-.574.622-1.208-1.398-2.133.918-1.782 2.671-.338.871-1.688-1.492-1.948.953-1.848 2.725-.444 1.404-4.774.627.344c1.089.661 1.652.235 1.776-1.086zm12.929 5.786.49 4.461-2.517.995-.527 1.972 1.836 1.558-.479 1.795-2.487.876-.51 1.896 1.783 1.747-.344 1.285-2.446 1.108 1.635 1.925-.705 2.623-4.412 2.411-3.447-4.52 4.27-22.234-1.592-.426a.622.622 0 0 1-.438-.759l.669-2.493c-4.821-3.654-7.208-9.979-5.55-16.181 2.132-7.966 10.174-12.775 18.147-10.986.035.426.029.858-.03 1.291-.147 1.078-.615 2.186-1.48 3.258-.118.142-.243.29-.373.432a5.459 5.459 0 0 0-5.62 4.04 5.437 5.437 0 0 0 .118 3.216c.083.355.219.699.396 1.036a4.184 4.184 0 0 0 1.759 1.729 5.574 5.574 0 0 0 1.582.711 5.468 5.468 0 0 0 6.645-3.696 17.802 17.802 0 0 0 2.263-2.398c1.256-1.617 2.114-3.334 2.624-5.082a15.3 15.3 0 0 1 3.565 14.387c-1.658 6.201-6.9 10.489-12.894 11.241l-.67 2.493a.62.62 0 0 1-.758.438l-.503-.149z"
      />
      <rect
        className="filling"
        width={512}
        y={height - percentFilled}
        height={percentFilled}
        mask="url(#myMask)"
      />
      <path
        stroke="black"
        strokeWidth={1}
        fill="none"
        d="M17.111 100.307H27.13a10.43 10.43 0 0 0 1.2 3.587l.753 1.606H11.538v-2.606h-.026V58.897c-2.339.899-4.53.92-6.349.3a7.521 7.521 0 0 1-3.5-2.45c-.88-1.109-1.439-2.459-1.61-3.949-.26-2.31.43-4.919 2.4-7.37.1-.12.21-.24.34-.34L59.847.552c.74-.68 1.879-.75 2.699-.11l57.186 44.456c.09.07.169.14.249.23 2.65 2.85 3.31 6.009 2.67 8.679a8.07 8.07 0 0 1-1.819 3.479c-.87.98-1.98 1.74-3.24 2.189-2 .721-4.38.7-6.789-.439v41.27h.003v5.193H77.393l.344-1.285-.015-.004c.199-.745.313-1.509.342-2.274.277-.515.514-1.06.704-1.63h26.435V56.577c0-1.01-39.227-32.017-43.556-35.387-4.589 3.49-44.536 34.247-44.536 35.547v43.57zM93.753 3.552l17.169.7V27.44L93.753 16.111V3.552zM71.092 66.137a1.81 1.81 0 1 1-1.729-3.18c4.17-2.263 6.112-5.188 6.504-8.049.207-1.528-.03-3.062-.604-4.483a10.404 10.404 0 0 0-2.695-3.802c-2.292-2.049-5.508-3.127-8.866-2.292-1.362.337-2.54 1.019-3.571 1.978-1.096 1.019-2.043 2.352-2.873 3.927a1.813 1.813 0 0 1-2.446.764 1.815 1.815 0 0 1-.764-2.446c1.019-1.931 2.209-3.589 3.619-4.904 1.475-1.368 3.187-2.351 5.176-2.843 4.619-1.143 9.02.314 12.147 3.11a14.051 14.051 0 0 1 3.643 5.146c.799 1.972 1.125 4.14.823 6.337-.539 3.92-3.051 7.853-8.364 10.737zM57.198 80.452c-6.87-9.228-7.036-17.97 1.303-26.095l-6.005-3.317c-4.81-1.871-13.634 11.923-10.223 15.606l4.679 6.941-.965 2.014c-.267.599-.006 1.019.646 1.309l.634.172-9.868 21.784 2.464 5.254 4.928-1.451 1.267-2.464-1.214-2.274 2.677-.574.622-1.208-1.398-2.133.918-1.782 2.671-.338.871-1.688-1.492-1.948.953-1.848 2.725-.444 1.404-4.774.627.344c1.089.661 1.652.235 1.776-1.086zm12.929 5.786.49 4.461-2.517.995-.527 1.972 1.836 1.558-.479 1.795-2.487.876-.51 1.896 1.783 1.747-.344 1.285-2.446 1.108 1.635 1.925-.705 2.623-4.412 2.411-3.447-4.52 4.27-22.234-1.592-.426a.622.622 0 0 1-.438-.759l.669-2.493c-4.821-3.654-7.208-9.979-5.55-16.181 2.132-7.966 10.174-12.775 18.147-10.986.035.426.029.858-.03 1.291-.147 1.078-.615 2.186-1.48 3.258-.118.142-.243.29-.373.432a5.459 5.459 0 0 0-5.62 4.04 5.437 5.437 0 0 0 .118 3.216c.083.355.219.699.396 1.036a4.184 4.184 0 0 0 1.759 1.729 5.574 5.574 0 0 0 1.582.711 5.468 5.468 0 0 0 6.645-3.696 17.802 17.802 0 0 0 2.263-2.398c1.256-1.617 2.114-3.334 2.624-5.082a15.3 15.3 0 0 1 3.565 14.387c-1.658 6.201-6.9 10.489-12.894 11.241l-.67 2.493a.62.62 0 0 1-.758.438l-.503-.149z"
      />
    </svg>
  );
};