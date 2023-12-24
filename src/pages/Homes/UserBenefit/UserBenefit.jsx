import rocket from "../../../assets/benefitLogo/rocket.png"
import businessman from "../../../assets/benefitLogo/businessman.png"
import cost from "../../../assets/benefitLogo/cost.png"
import design from "../../../assets/benefitLogo/design-thinking.png"
import education from "../../../assets/benefitLogo/education.png"
import health from "../../../assets/benefitLogo/healthcare.png"

const UserBenefit = () => {
  return (
    <section className="bg-gradient-to-r from-[#614385] to-[#516395]  pb-6">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6 p-6 bg-gray-100 rounded-xl">
          <div className="mb-16 text-center">
            <p className="mt-2 text-2xl lg:text-4xl font-bold tracking-tight  text-indigo-600 uppercase">
              who can benefit the most
            </p>
            <h4 className="text-base mt-2 text-gray-900 font-semibold tracking-wide ">
              Our platform is designed to cater to a diverse audience, providing
              valuable resources and features tailored to the needs of various
              individuals and professionals.
            </h4>
          </div>

          <div className="flex flex-wrap my-12">
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
              <div className="flex items-center mb-6">
                <img src={rocket} className="h-10 w-10" />
                <div className="ml-4 text-xl">Developers</div>
              </div>
              <p className="leading-loose text-gray-500">
                Stay updated with the latest coding trends, access a rich
                repository of code snippets, and engage in a vibrant developer
                community. Our platform is a hub for tech enthusiasts looking to
                enhance their coding skills and collaborate with like-minded
                peers.
              </p>
            </div>

            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
              <div className="flex items-center mb-6">
                <img src={businessman} className="h-10 w-10" />
                <div className="ml-4 text-xl">Corporate Professionals</div>
              </div>
              <p className="leading-loose text-gray-500">
                Unlock productivity with our suite of tools designed for
                seamless project management, communication, and collaboration.
                Tailored to meet the demands of the corporate world, our
                platform empowers professionals to work smarter and achieve
                their goals efficiently.
              </p>
            </div>

            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
              <div className="flex items-center mb-6">
                <img src={cost} className="h-10 w-10" />
                <div className="ml-4 text-xl">
                  Bankers and Finance Professionals
                </div>
              </div>
              <p className="leading-loose text-gray-500">
                Access comprehensive financial analyses, stay informed about
                market trends, and connect with fellow finance professionals.
                Whether you&apos;re a seasoned banker or a finance enthusiast,
                our platform offers insights and networking opportunities to
                elevate your financial expertise.
              </p>
            </div>

            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
              <div className="flex items-center mb-6">
                <img src={education} className="h-10 w-10" />
                <div className="ml-4 text-xl">Students and Educators</div>
              </div>
              <p className="leading-loose text-gray-500">
                Facilitate learning and knowledge-sharing through our
                educational resources. Students can find study materials,
                connect with mentors, and collaborate on projects, while
                educators can create a dynamic online learning environment for
                their students.
              </p>
            </div>

            <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
              <div className="flex items-center mb-6">
                <img src={design} className="h-10 w-10" />
                <div className="ml-4 text-xl">Creative Professionals </div>
              </div>
              <p className="leading-loose text-gray-500">
                For artists, designers, and creative minds, our platform offers
                a space to showcase portfolios, collaborate on projects, and
                gain inspiration from a vibrant creative community. Elevate your
                artistic journey and connect with like-minded individuals.
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-8">
              <div className="flex items-center mb-6">
                <img src={health} className="h-10 w-10" />
                <div className="ml-4 text-xl">
                  Health and Wellness Enthusiasts{" "}
                </div>
              </div>
              <p className="leading-loose text-gray-500">
                Prioritize your well-being with resources on fitness, nutrition,
                and mental health. Connect with health professionals, share
                wellness tips, and embark on a journey towards a healthier
                lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserBenefit
