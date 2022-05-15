package com;

import java.io.IOException;
import java.util.HashMap; 
import java.util.Map; 
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.User;

/**
 * Servlet implementation class UserAPI
 */
@WebServlet("/UserAPI")
public class UserAPI extends HttpServlet {
	
	User user = new User();
	
	private static final long serialVersionUID = 1L;
	
	// Convert request parameters to a Map
		private static Map getParasMap(HttpServletRequest request) { 
			
		 Map<String, String> map = new HashMap<String, String>(); 
		 
		try { 
			
		 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
		
		 String queryString = scanner.hasNext() ? 
		 scanner.useDelimiter("\\A").next() : ""; 
		 
		 scanner.close(); 
		 String[] params = queryString.split("&"); 
		 
		 for (String param : params) { 

		 String[] p = param.split("="); 
		 map.put(p[0], p[1]); 
		 } 
		 
		 } catch (Exception e) { 
		 } 
		return map; 
		}
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
		String output = user.createUser(request.getParameter("acntNumber"), 
				        request.getParameter("fullName"), 
				        request.getParameter("email"), 
				        request.getParameter("NIC"),
				        request.getParameter("address"),
				        request.getParameter("mobileNumber"),
				        request.getParameter("landpNumber"),
				        request.getParameter("userName"),
				        request.getParameter("password"),
				        request.getParameter("confirmPassword")); 
		
		response.getWriter().write(output); 

	}


	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//parameter map
		Map paras = getParasMap(request);
		
		//getting values from the map and sending to update function
		String output = user.updateUser(paras.get("acntNumber").toString(), 
		                paras.get("fullName").toString(), 
		                paras.get("email").toString(), 
		                paras.get("NIC").toString(), 
		                paras.get("address").toString(),
		                paras.get("mobileNumber").toString(),
		                paras.get("landpNumber").toString(),
		                paras.get("userName").toString()); 
		
		//sending the output to client
		response.getWriter().write(output); 
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//parameter map
		Map paras = getParasMap(request);
		
		//getting values from the map and sending to delete function
		String output = user.deleteUser(paras.get("userName").toString()); 
		
		//sending the output to client
		response.getWriter().write(output); 
	}

}
