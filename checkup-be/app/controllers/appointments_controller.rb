class AppointmentsController < ApplicationController
	# before_action :require_logged_in


	  def index
	  	@appointment = Appointment.all
	  	render json: @appointment
	  end

	#   def update
	#     @appointment = Appointment.find(params[:id])
	#     app_info = params[:appointment]
	#     reason = app_info[:reason].empty? ? nil : app_info[:reason]

	#     if !reason.nil? || app_info[:user_id].empty?
	#       app_params = { "reason" => reason,
	#                      "user_id" => app_info[:user_id] }
	#       @appointment.update(app_params)
	#       render :edit
	#     else
	#       render json: ["Please explain the reason for your visit"], status: 422
	#     end
	#   end

	#   def show
	#     @appointment = Appointment.find(params[:id])

	#     unless @appointment.user == nil
	#       render json: ["This appointment is already booked"], status: 403
	#     end
	# end
end