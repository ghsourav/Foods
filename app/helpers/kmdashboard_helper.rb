module KmdashboardHelper
    def Completeorder
        @placeorder.status = complete
    end

    def current_kmuser
        @current_kmuser ||= Kmuser.find(session[:kmuser_id]) if session[:kmuser_id]
    end

    def kmauthorize
        redirect_to '/klogin' unless current_kmuser
    end
end
